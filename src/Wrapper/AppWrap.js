import React from 'react'

import {NavigationDots,SocialMedia} from '../Components'
const AppWrap = (Component , idName, className) => function HOC() {
  return (
    <div id={idName} className={`app__container ${className}`}>

        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copyright'>
                     <p className='p-text'>Copyright © Muhammad Noman 2023.</p>
                     <p className='p-text'>All rights reserved.</p>

            </div>
        </div>

        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap