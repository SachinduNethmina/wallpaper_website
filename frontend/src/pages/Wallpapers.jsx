import { useEffect, useState } from "react";
import "./Wallpapers.css";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../urls";

const Wallpapers = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${BACKEND_URL}/wallpapers?category=${category}&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setWallpapers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch wallpapers");
        setLoading(false);
      });
  }, [search, category]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openModal = (imageSrc, title) => {
    setSelectedTitle(title);
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  const downloadImage = (imageSrc, title) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `${title}.png`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="full-bg">
      <div className="container text-white p-4">
        <h1 className="hero-title">Wallpapers Gallery</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-bar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-control category-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="iphone">iPhone</option>
            <option value="desktop">Desktop</option>
          </select>
        </div>

        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="error-message">{error}</div>}

        <section className="gallery-section">
          <motion.div
            className={`gallery-grid`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {wallpapers.map((wallpaper) => {
              // Check if the aspect ratio is already loaded
              return (
                <img
                  key={wallpaper.id}
                  src={`${BACKEND_URL}/${wallpaper.imageUrl}`}
                  className={`gallery-item ${
                    parseInt(wallpaper.aspectRatio) === 1
                      ? "item-9-16"
                      : parseInt(wallpaper.aspectRatio) === 2
                      ? "item-1-1"
                      : "item-16-9"
                  }`}
                  alt={wallpaper.title}
                  onClick={() =>
                    openModal(
                      `${BACKEND_URL}/${wallpaper.imageUrl}`,
                      wallpaper.title
                    )
                  }
                />
              );
            })}
          </motion.div>
        </section>

        {selectedImage && (
          <div className="modal-c" onClick={closeModal}>
            <div
              className="modal-content-c"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="modal-title-c">Image Preview</h2>
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected" className="modal-image" />
              <div className="modal-buttons">
                <button
                  onClick={() => downloadImage(selectedImage, selectedTitle)}
                >
                  Download
                </button>
                <button
                  onClick={() => alert("Donate functionality coming soon!")}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallpapers;
