import React, { useContext } from 'react'
import './App.scss'

import { About,Footer,Work,Testimonials,Skills,Header } from './Container'
import {Navbar} from './Components'




const App = () => {

  
 
 
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App