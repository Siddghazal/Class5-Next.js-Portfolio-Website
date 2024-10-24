import Image from 'next/image'; 
import React from 'react';

const Project = () => {
  return ( 
    <div id='Project' className='scroll-mt-20'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-25 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          
          <div className="flex flex-wrap -m-4 -mt-12">
            {/* First Project Image */}
            <div className="p-4 cursor-pointer pl-8">
              <div className="relative w-full h-auto overflow-hidden">
                <Image
                  alt="project image 1"
                  className="object-contain"
                  src="/pic1.png"
                  width={300}
                  height={200}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 text-center">
                    <h2 className="tracking-widest text-xl title-font font-medium text-blue-500 mb-1">
                      Project 1
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Static Interactive Resume
                    </h1>
                    <p className="leading-relaxed">
                      This is the project which I have created.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Project Image */}
            <div className="p-4 cursor-pointer pl-8">
              <div className="relative w-full h-auto overflow-hidden">
                <Image
                  alt="project image 2"
                  className="object-contain"
                  src="/pic2.jpg"
                  width={300}
                  height={200}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 text-center">
                    <h2 className="tracking-widest text-xl title-font font-medium text-blue-500 mb-1">
                      Project 2
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Student Id Card
                    </h1>
                    <p className="leading-relaxed">
                      This is the project which I have created.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
