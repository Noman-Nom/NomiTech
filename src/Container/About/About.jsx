import React from "react";
import { useState, useEffect } from "react";




import {urlFor,Client} from '../../Client'
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../Wrapper";


// const abouts = [
//   {

        // id:2 
//     title: "Full Stack Web Development",
//     description: "Building from Pixels to Databases, We Do It All",
//     imgUrl: images.about07,
//   },
//   {
//     title: "Front-End Development",
//     description: "Front-End Magic: Turning Designs into Reality",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Back-End Development",
//     description: "Reliability, Scalability, Security: Our Back-End Promise",
//     imgUrl: images.about03,
//   },
//   {
//     title: "DataBase",
//     description: "Empowering Business Decisions with Data Management",
//     imgUrl: images.about05,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    Client.fetch(query)
    .then((data) => setAbouts(data))
    .catch((error) => console.error("Error fetching data from Sanity:", error));
  
  }, []);
  return (
    <>
      <h2 className="head-text">
       
        "Where Good <span>Development</span>
        <br />
        Meets Great <span>Business Outcomes</span>"
      </h2>

      <div className="app__profiles" id="about">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          
          >
            <img src={ urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   "app__whitebg"

   );

