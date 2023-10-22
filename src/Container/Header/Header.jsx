import React from "react";
import { motion } from "framer-motion";

import { images } from "../../Constants";
import { AppWrap } from "../../Wrapper";
import "./Header.scss";

const scaleVarients ={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text p-extra ">Hello, I am</p>
              <h1 className="head-text">Noman</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text p-extra">Full Stack Web Developer</p>
           <h4>&</h4>
            <p className="p-text ">Computer System's Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile img" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle1}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
      variants={scaleVarients}
      whileInView={scaleVarients.whileInView}
      className="app__header-circles"
      >

        {
          [images.mySql,images.javascript, images.reacticon,images.nextjs,images.firebase,images.mongodb].map((circle,index)=>(
            <div className="circle-cmp app__flex" key={`circle-${index}`} >
                  <img src={circle} alt="circle" />
            </div>
          ))
        }


      </motion.div>
    </div>
  );
};

export default  AppWrap(Header, 'home');
