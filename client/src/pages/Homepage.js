import React, { useState, useEffect } from 'react';
import '../styles/homepagestyle.css';
import { useNavigate } from 'react-router-dom';
import { ElfsightWidget } from 'react-elfsight-widget';

import xray from '../pictures/xray.jpg';
import bridge from '../pictures/bridge.jpg';
import cleaning from '../pictures/cleaningandpolishing.jpg';
import orthodontic from '../pictures/ortodontic.jpg';
import removal from '../pictures/teethremoval.jpg';
import implant from '../pictures/dentures.jpg';
import laser from '../pictures/laser.jpg';
import rootCanal from '../pictures/fillingandrootcanal.jpg';
import logo from '../pictures/logo.png';

function Homepage() {
  const navigate = useNavigate();

  const book = () => navigate('/appointment');
  const admin = () => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    } else {
      navigate('/adminlogin');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="App">
        <header className="header">
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#review-box">Reviews</a></li>
            </ul>
          </nav>
          <div className="logo">
            <a
                    className="logo"
                    style={{ cursor: 'pointer' }}
                    onClick={admin}
                  >
                    <img src = {logo}/>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <h1>Apple Dental Clinic and Implant Centre</h1>
          <h2>Welcome to Our Dental Clinic</h2>
          <h6>Providing Quality Dental Care with a Smile</h6>
          <p className="clinic-timings">
            Open Mon–Fri: 10 AM – 6:30 PM | Sun: 10 AM – 1 PM
          </p>
          <button onClick={book}>Book an Appointment</button>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <img src={xray} alt="X-ray" />
              <h3>Digital X-Rays</h3>
              <p>Get accurate diagnoses with our digital X-ray technology</p>
            </div>
            <div className="service-card">
              <img src={bridge} alt="Bridge" />
              <h3>Fix Teeth and Bridge</h3>
              <p>Restore your smile with our tooth fixing and bridging services</p>
            </div>
            <div className="service-card">
              <img src={cleaning} alt="Cleaning" />
              <h3>Cleaning and Polishing of Teeth</h3>
              <p>
                Maintain good oral hygiene with our professional teeth cleaning
                and polishing services
              </p>
            </div>
            <div className="service-card">
              <img src={orthodontic} alt="Orthodontic" />
              <h3>Orthodontic Treatment</h3>
              <p>Get a perfect smile with our orthodontic treatment services</p>
            </div>
            <div className="service-card">
              <img src={removal} alt="Removal" />
              <h3>Dental Services & Painless Tooth Removal</h3>
              <p>
                Experience painless tooth removal and comprehensive dental
                services
              </p>
            </div>
            <div className="service-card">
              <img src={implant} alt="Implants" />
              <h3>Implants and Dentures</h3>
              <p>
                Restore your smile with our dental implant and denture services
              </p>
            </div>
            <div className="service-card">
              <img src={laser} alt="Laser Treatment" />
              <h3>Laser Treatment</h3>
              <p>
                Experience the latest in dental technology with our laser
                treatment services
              </p>
            </div>
            <div className="service-card">
              <img src={rootCanal} alt="Root Canal" />
              <h3>Dental Fillings & Root Canal Treatment</h3>
              <p>Get effective solutions for tooth decay and root canal issues</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <h2>Meet the Doctors</h2>
          <div className="doctor-cards">
            <div className="doctor-card">
              <h3>Dr. Bhakti Patel</h3>
              <p>Dental Surgeon (BDS)</p>
            </div>
            <div className="doctor-card">
              <h3>Dr. Vyomesh Punjabi</h3>
              <p>BDS, Implant Specialist</p>
            </div>
          </div>
        </section>

        {/* Review Box */}
        <section id="review-box" className="review-box">
          <h1>Our Reviews</h1>
          <div className="widget-box">
            <div
              className="elfsight-app-05042622-388c-4f92-b7fd-0f5b3c2e6d10"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>


        {/* Photos Section */}
        <section id="photos" className="photos">
          <h2>Our Photos</h2>
          <div className="photo-gallery">
            <img src="photo1.jpg" alt="Photo 1" />
            <img src="photo2.jpg" alt="Photo 2" />
            <img src="photo3.jpg" alt="Photo 3" />
          </div>
        </section>


        {/* Location Section */}
        <section id="location" className="location">
          <h2>Our Location</h2>
          <p>
            Iskcon Rd, opp. Jk security, Mota Bazaar, Vallabh Vidyanagar, Anand,
            Gujarat 388120
          </p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236003.55320639414!2d72.77968224376521!3d22.445749459406777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d51c1c5b03d%3A0x5559d13853f5b9be!2sApple%20Dental%20Care%20and%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1726292418447!5m2!1sen!2sin"
            width="450"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>


        {/* Footer Section */}
        <footer id="contact" className="footer">
          <h2>Get in Touch</h2>
          <p>Phone: +91 7567392455</p>
          <p>Phone: +91 9428076452</p>
          <p>
            Email: <a href="mailto:patelbhakti138@gmail.com">patelbhakti138@gmail.com</a>
          </p>
          <p>
            Email: <a href="mailto:drvyomeshpunjabi@gmail.com">drvyomeshpunjabi@gmail.com</a>
          </p>
          <p>
            Iskcon Rd, opp. Jk security, Mota Bazaar, Vallabh Vidyanagar, Anand,
            Gujarat 388120
          </p>
        </footer>

        {/* Floating Button */}
        <button
          className="floating-dental-btn"
          onClick={() => navigate('/dentaldisease')}
        >
          Dental AI
        </button>
      </div>
    </>
  );
}

export default Homepage;
