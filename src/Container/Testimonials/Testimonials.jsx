import React from 'react'
import  './Testimonials.scss'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {AiFillCaretLeft , AiFillCaretRight} from 'react-icons/ai'
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)


  const handleClick=(index)=>{
        setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const skillsQuery = '*[_type == "brands"]';

    Client.fetch(query).then((data) => {
      console.log(data);
      setTestimonials(data);
    });
    Client.fetch(skillsQuery)
      .then((data) => {
      setBrands(data);
      })
      .catch((error) =>
        console.error("Error fetching data from Sanity:", error)
      );
  }, []);

    const test = testimonials[currentIndex]
  return (
        <>
        {testimonials.length &&(
          <>
          <div className="app__testimonials-item app__flex" id='testimonials'>
        
          <img src={urlFor(test.imageurl)}  />

          <div className="app__testimonials-content">
            <p className="p-text">{test.feedback}</p>
            <div>
              <h4 className="bold-text">
                {test.name}
              </h4>
              <h5 className='p-text'>{test.company}</h5>
            </div>
          </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div className="app__flex" onClick={()=>handleClick(currentIndex===0 ? testimonials.length -1: currentIndex-1)}>

              <AiFillCaretLeft/>
            </div>
            <div className="app__flex" onClick={()=>handleClick(currentIndex===testimonials.length-1 ? 0: currentIndex+1)}>

              <AiFillCaretRight/>
            </div>
          </div>

          <div className="app__testimonials-brands app__flex">
            {
              brands.map((brand)=>(

                <motion.div 
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5, type: 'tween'}}

                key={brand._id}
                >
                      <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                </motion.div>
              ))
            }
          </div>
          </>
        )}
        </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
   'testimonial',
   "app__primarybg"

   );

