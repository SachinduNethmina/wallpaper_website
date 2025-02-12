const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const multer = require("multer");
const upload = multer();
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Database setup
const sequelize = new Sequelize("wallpapers_db", "root", "Nethmina9084", {
  host: "localhost",
  dialect: "mysql",
});

const Wallpaper = sequelize.define("Wallpaper", {
  title: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  aspectRatio: { type: DataTypes.STRING, allowNull: true },
  number: { type: DataTypes.TEXT, allowNull: true },
});

const ContactMessage = sequelize.define("ContactMessage", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
});

// Sync database
sequelize.sync();

// API Routes
app.get("/api/wallpapers", async (req, res) => {
  const { category, search } = req.query;
  const where = {};
  if (category) where.category = category;
  if (search) where.title = { [Sequelize.Op.like]: `%${search}%` };
  const wallpapers = await Wallpaper.findAll({ where });
  res.json(wallpapers);
});

app.get("/api/wallpapers/latest", async (req, res) => {
  const limit = 40;
  const wallpapers = await Wallpaper.findAll({
    limit,
    order: [["createdAt", "desc"]],
  });
  res.json(wallpapers);
});

app.post("/api/wallpapers", upload.any(), async (req, res) => {
  const { title, type, category, password, number } = req.body;
  const files = req.files;

  if (password !== process.env.SECRET_KEY)
    return res.status(401).json({ message: "Unauthorized" });

  let aspectRatio = parseInt(type);

  let uploadDir = "uploads";

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

  if (!files || files.length === 0)
    return res.status(400).json({ message: "Invalid image" });

  const exitWallpaper = await Wallpaper.findOne({
    where: {
      number,
    },
  });

  if (exitWallpaper)
    return res.status(400).json({ message: "Allready exists" });

  let file = files[0];

  const fileName = `${uploadDir}/${Date.now()}.${file.originalname
    .split(".")
    .pop()}`;

  fs.writeFileSync(fileName, file.buffer);

  const wallpaper = await Wallpaper.create({
    title,
    imageUrl: fileName,
    category,
    aspectRatio,
  });

  res.json({ message: "Upload success", wallpaper });
});

const staticUploads = path.join(__dirname, "uploads");

app.get("/api/uploads/:fileName", (req, res) => {
  const { fileName } = req.params;
  res.sendFile(path.join(staticUploads, fileName));
});

const staticFrontend = path.join(__dirname, "frontend", "dist");
app.use(express.static(staticFrontend));

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFrontend, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
