import React from "react";
import { useState } from "react";

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

import { images } from "../../Constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.nomLogo2} alt="my-logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills","testimonials", "contacts"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className="app__navbar-icons">
      <a  className="app__flex" href="https://www.linkedin.com/in/muhammad-noman-770825277/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a  className="app__flex"href="https://github.com/Noman-Nom" target="_blank">
          <AiFillGithub />
        </a>
        <a className="app__flex"
          href="https://www.facebook.com/muhammadnoman.awan.73?mibextid=ZbWKwL"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
        <a className="app__flex"
          href="https://x.com/NomiTechh?t=13PuVJbUrkGvwqPLn4Th7A&s=09"
          target="_blank"
        >
          <AiFillTwitterCircle />
        </a>
        <a className="app__flex"
          href="https://instagram.com/nomitechh?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
    
      </div>

      <div className="app__navbar-menu">
        <BsFillMenuButtonWideFill
          className="icon"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            className="motion-div"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <AiOutlineCloseCircle
              className="close-icon"
              onClick={() => setToggle(false)}
            />
            <ul>
              {["Home", "About", "Work", "Skills", "Contacts"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                  <div />
                </li>
              ))}
            <div className="app__navbar-menu-icons">
      <a  className="app__flex" href="https://www.linkedin.com/in/muhammad-noman-770825277/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a  className="app__flex"href="https://github.com/Noman-Nom" target="_blank">
          <AiFillGithub />
        </a>
        <a className="app__flex"
          href="https://www.facebook.com/muhammadnoman.awan.73?mibextid=ZbWKwL"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
        <a className="app__flex"
          href="https://x.com/NomiTechh?t=13PuVJbUrkGvwqPLn4Th7A&s=09"
          target="_blank"
        >
          <AiFillTwitterCircle />
        </a>
        <a className="app__flex"
          href="https://instagram.com/nomitechh?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
    
      </div>
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
