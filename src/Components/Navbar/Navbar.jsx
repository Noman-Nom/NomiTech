import React from "react";
import { useState,  } from "react";

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";



 
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
        {["Home", "About", "Work", "Skills", "Contacts"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div/>
           
          </li>
        ))}

      </ul>
           


      <div className="app__navbar-menu">
        <BsFillMenuButtonWideFill className="icon" onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div className="motion-div"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <AiOutlineCloseCircle  className="close-icon" onClick={() => setToggle(false)} />
              <ul>

             
            {["Home", "About", "Work", "Skills", "Contacts"].map((item) => (
          <li  key={item}>
            <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
            <div />
          
          </li>
        ))}

</ul>
           
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
