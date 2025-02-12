import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
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
          <img
            src="https://i.pinimg.com/236x/43/5b/92/435b9276f43737f1ae7af221c988b1c1.jpg"
            alt="Wallpaper 1"
            className="gallery-item item-9-16"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 2"
            className="gallery-item item-1-1"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
            alt="Wallpaper 4"
            className="gallery-item item-16-9"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 3"
            className="gallery-item item-1-1"
          />

          <img
            src="https://i.pinimg.com/236x/43/5b/92/435b9276f43737f1ae7af221c988b1c1.jpg"
            alt="Wallpaper 1"
            className="gallery-item item-9-16"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 2"
            className="gallery-item item-1-1"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
            alt="Wallpaper 4"
            className="gallery-item item-16-9"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 3"
            className="gallery-item item-1-1"
          />

          <img
            src="https://i.pinimg.com/236x/43/5b/92/435b9276f43737f1ae7af221c988b1c1.jpg"
            alt="Wallpaper 1"
            className="gallery-item item-9-16"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 2"
            className="gallery-item item-1-1"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
            alt="Wallpaper 4"
            className="gallery-item item-16-9"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 3"
            className="gallery-item item-1-1"
          />

          <img
            src="https://i.pinimg.com/236x/43/5b/92/435b9276f43737f1ae7af221c988b1c1.jpg"
            alt="Wallpaper 1"
            className="gallery-item item-9-16"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 2"
            className="gallery-item item-1-1"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
            alt="Wallpaper 4"
            className="gallery-item item-16-9"
          />
          <img
            src="https://www.spigen.com/cdn/shop/files/mag_wallpaper_01.jpg?v=1716933335"
            alt="Wallpaper 3"
            className="gallery-item item-1-1"
          />
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
    </div>
  );
};

export default Home;
