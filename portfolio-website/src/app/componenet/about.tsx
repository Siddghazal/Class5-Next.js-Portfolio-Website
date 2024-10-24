import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      
      <img src="/pic0.jpeg" alt="profile picture" width="300" height="300" className="object-cover object-center rounded mx-auto" />
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        
      </h1>
       <p className="mb-5 leading-relaxed text-1xl">
        I am a student at GIAIC, pursuing a course in Artificial Intelligence,Web 3.0 and Metaverse.Passionate about learning new skills to stay up-to-date with the latest innovation.
      </p>
      <div className="flex justify-center">
      
        
        
      </div>
    </div>
  </div>
</section>

  </div>
  )
}

export default About