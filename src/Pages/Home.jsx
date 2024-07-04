import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBookOpen } from 'react-icons/fa';
import DefaultTimeline from '../Components/Education/Education';
import { BsPersonWorkspace } from 'react-icons/bs';
import WhatIamDoing from '../Components/WhatIamDoing';

const Home = () => {
    return (
        <div className=''>
     <Helmet>
         <title> About | Nafiul Hasan</title>
     </Helmet>
     <h1 className='text-2xl lg:text-3xl font-semibold text-white'>About Me</h1>
     <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>
     <div className='my-3 md:my-6'>
         <h1 className=' text-[#D6D6D6]'>
             <span className=' font-semibold'>As a dedicated Full Stack Web Developer, I strive to build eye-catching
                 and clean web applications.</span> <br /><br />
             I have hands-on experience in building websites using HTML, CSS, Tailwind CSS, and React for the front-end,
             as well as creating back-end servers and managing databases. I’m proficient in JavaScript and have
             experience in project management,
             having recently led a Software Engineering project for my academic coursework, which was a valuable
             experience.
             I enjoy coding, debugging, and enhancing web applications. I’m eager to master best practices and advanced
             development techniques while effectively contributing to projects under the guidance of senior developers.
         </h1>
     </div>
     <div className='flex gap-3'>
         <div
             className='rounded-lg text-2xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-4 border-l-4'>
             <FaBookOpen />
         </div>

         <h1 className='text-2xl lg:text-3xl font-semibold text-white'>Education</h1>
     </div>

     <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>
     {/* Education part */}
     <div>
         <DefaultTimeline />
     </div>
     {/* What I am doing  */}
     <div className='flex gap-3 my-3 md:my-10'>
         <div
             className='rounded-lg text-2xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-4 border-l-4'>
             <BsPersonWorkspace />
         </div>

         <h1 className='text-2xl lg:text-3xl font-semibold text-white '>What I am Doing</h1>
     </div>

     <div>
      <WhatIamDoing/>
     </div>

     {/* resume */}
     <h1 className='text-2xl lg:text-3xl font-semibold text-white my-5'>My Resume</h1>
          <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>
          <div className=' my-5'>

              <img className='w-full h-full rounded-xl'
                  src="https://i.ibb.co/HGsyWCs/Full-Stack-developer-Nafiul-Hasan-page-0001.jpg" alt="Resume" />

          </div>

     
 </div>
    );
};

export default Home;