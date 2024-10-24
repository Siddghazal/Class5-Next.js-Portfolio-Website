import React from 'react'
import Hero from './componenet/hero'
import Contact from './componenet/contact'
import Project from './componenet/project'
import About from './componenet/about'
import Footer from './componenet/footer'
import Skill from './componenet/skill'





export default function Home () {
  return (
    <div className=' bg-fixed bg-cover bg-center custom-image'>
    
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      
      
      
      
      </div>
  )
}
