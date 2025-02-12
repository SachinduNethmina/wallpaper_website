const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const multer = require("multer");
const upload = multer();
const path = require("path");

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
});

const ContactMessage = sequelize.define("ContactMessage", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
});

// Sync database
sequelize.sync();

// API Routes
app.get("/wallpapers", async (req, res) => {
  const { category, search } = req.query;
  const where = {};
  if (category) where.category = category;
  if (search) where.title = { [Sequelize.Op.like]: `%${search}%` };
  const wallpapers = await Wallpaper.findAll({ where });
  res.json(wallpapers);
});

app.post("/wallpapers", async (req, res) => {
  const { title, imageUrl, category } = req.body;
  const wallpaper = await Wallpaper.create({ title, imageUrl, category });
  res.json(wallpaper);
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const contactMessage = await ContactMessage.create({ name, email, message });
  res.json(contactMessage);
});

app.post("/save", upload.any(), async (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

const staticFrontend = path.join(__dirname, "frontend", "dist");
app.use(express.static(staticFrontend));

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFrontend, "index.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
