import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../urls";

const Home = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/wallpapers/latest`)
      .then((res) => res.json())
      .then((data) => {
        setWallpapers(data);
      })
      .catch((err) => {
        setError("Failed to fetch wallpapers");
      });
  }, []);

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
    <div className="home-container">
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Flickezz Wallpapers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover stunning, high-quality wallpapers for all your devices.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/wallpapers" className="btn btn-primary mt-3">
            Explore Wallpapers
          </Link>
        </motion.div>
      </header>

      <section className="info-section">
        <h2>Why Choose WallpapersHub?</h2>
        <p>
          Thousands of high-quality wallpapers curated daily, designed to fit
          all screen sizes perfectly.
        </p>
      </section>

      <section className="gallery-section">
        <h2>Featured Wallpapers</h2>
        <motion.div
          className="gallery-grid"
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

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <motion.div
          className="testimonials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="testimonial">
            <p>"Amazing wallpapers! My phone looks stunning now."</p>
            <span>- Sarah M.</span>
          </div>
          <div className="testimonial">
            <p>"Best collection of wallpapers I've ever seen!"</p>
            <span>- John D.</span>
          </div>
        </motion.div>
      </section>

      <section className="cta-section">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest and exclusive wallpapers.
        </p>
        <div className="d-inline-flex gap-3 align-items-center">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="email-input mt-2"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.1 }}
          >
            Subscribe
          </motion.button>
        </div>
      </section>

      {selectedImage && (
        <div className="modal-c" onClick={closeModal}>
          <div className="modal-content-c" onClick={(e) => e.stopPropagation()}>
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
  );
};

export default Home;
