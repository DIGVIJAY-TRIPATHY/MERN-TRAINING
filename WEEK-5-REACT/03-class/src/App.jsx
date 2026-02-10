import React from "react";
import "./App.css";

function App() {
  return (
    <div classNameName="container">
      {/* HEADER */}

      <header className="header">
        <div className="logo">
          <img src="" alt="logo" />
          <h3>React</h3>
        </div>
        <nav className="navbar">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Excellence</h1>
          <p className="hero-subtitle">Your gateway to luxury living</p>
          <button className="cta-buttton">Explore Now</button>
        </div>
      </section>

      {/* CARD */}

      <section className="card">
        <h2 className="cards-heading">I am CARD heading</h2>
        <div className="card-container">
          <div className="cards">
            <h1 className="name">NAME</h1>
            <p className="number">NUMBER</p>
            <p className="address">ADDRESS</p>
          </div>
          <div className="cards">
            <h1 className="name">NAME</h1>
            <p className="number">NUMBER</p>
            <p className="address">ADDRESS</p>
          </div>
          <div className="cards">
            <h1 className="name">NAME</h1>
            <p className="number">NUMBER</p>
            <p className="address">ADDRESS</p>
          </div>
          <div className="cards">
            <h1 className="name">NAME</h1>
            <p className="number">NUMBER</p>
            <p className="address">ADDRESS</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="section-header">
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle">
              Delivering excellence across every project
            </p>
          </div>

          <div className="stats-grid">
            <div className="first-two">
              <div className="stat-card">
                <h3 className="stat-number">250+</h3>
                <p className="stat-label">Luxury Projects</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Industry Awards</p>
              </div>
            </div>
            <div className="second-two">
              <div className="stat-card">
                <h3 className="stat-number">180+</h3>
                <p className="stat-label">Elite Clients</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <div className="footer-logo">
              <i className="fas fa-gem"></i>
              <span>DARK WORLD</span>
            </div>
            <p className="footer-desc">
              Curating luxury experiences with unmatched precision and
              excellence.
            </p>

            <div className="footer-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i> support@.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +91 9876543210
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 . All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
