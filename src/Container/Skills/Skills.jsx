
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    Client.fetch(query).then((data) => {
      // console.log(data);
      setExperiences(data);
    });
    Client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch((error) =>
        console.error("Error fetching data from Sanity:", error)
      );
  }, []);

  return (
    <>
      <h2 className="head-text" id="skills">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container" >
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              {/* {console.log("jasj",experience.year)} */}
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text bold-text">{work.company}
                      </p>
                      <p className="p-text p-other " >{work.desc}</p>
                    </motion.div>
                    {/* {console.log('here', work.desc)} */}
                    
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
   'skill',
   "app__whitebg"

   );
