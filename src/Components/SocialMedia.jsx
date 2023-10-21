import React from 'react'

import {AiFillGithub , AiFillFacebook, AiFillLinkedin,AiFillTwitterCircle, AiOutlineInstagram} from 'react-icons/ai'


const SocialMedia = () => {
  return (
    <div className='app__social'>
            <div>
           <AiFillLinkedin/>
           
            </div>
            <div>
           <AiFillGithub/>

            </div>
            <div>
           <AiFillFacebook/>

            </div>
            <div>
           <AiFillTwitterCircle/>

            </div>
            <div>
           <AiOutlineInstagram/>

            </div>
    </div>
  )
}

export default SocialMedia