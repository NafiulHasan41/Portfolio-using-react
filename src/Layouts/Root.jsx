import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../Components/Shared/Sidebar';
import Footer from '../Components/Shared/Footer';

const Root = () => {
    const customNavLink = (
        <>
         
            <NavLink to="/"  className={({ isActive }) =>
                  isActive ? " text-[#FEC462]  font-bold hover:scale-125   border-none" : "font-bold my-2 hover:scale-125  md:mx-2  text-[#D6D6D6] rounded-lg  border-none"
                }>About</NavLink>

            <NavLink to="/skills"  className={({ isActive }) =>
                  isActive ? " text-[#FEC462] hover:scale-125  font-bold   border-none" : "font-bold my-2 hover:scale-125  md:mx-2  text-[#D6D6D6] rounded-lg  border-none"
                }>Skills</NavLink>

            <NavLink to="/projects"  className={({ isActive }) =>
                  isActive ? " text-[#FEC462] hover:scale-125  font-bold   border-none" : "font-bold my-2 hover:scale-125   md:mx-2  text-[#D6D6D6] rounded-lg  border-none"
                }>Projects</NavLink>

            <NavLink to="/contact"  className={({ isActive }) =>
                  isActive ? " text-[#FEC462] hover:scale-125  font-bold   border-none" : "font-bold my-2 hover:scale-125   md:mx-2  text-[#D6D6D6] rounded-lg  border-none"
                }>Contact</NavLink>

              
    
        </>
      );
    return (
        <div className=' py-5  p-3 md:p-6 lg:p-14 flex flex-col lg:flex-row gap-5 lg:gap-10 lg:px-[5%]'>
           <div className=' lg:w-[350px] lg:p-5'>
            <Sidebar/>
           </div>
           <div className='lg:flex-1 lg:m-5 lg:relative  rounded-3xl bg-[#1E1E1F]  border-white/15 border '>
            <div>
                <div className='hidden lg:block'>
                <div className=' lg:absolute lg:p-3 lg:rounded-bl-3xl lg:rounded-tr-3xl text-white flex gap-4 justify-center items-center  bg-[#282829] w-[50%] right-0 '>
                   {customNavLink}
                </div>
                </div>
                
                <div className=' lg:px-10 lg:py-5 p-3 md:p-5 md:mb-14'>
               <Outlet />
               <div className=' hidden lg:block'>
                    {/* footer */}
    
                  <Footer/>
               </div>
               </div>

                <div className=' lg:hidden rounded-t-3xl fixed bottom-0 left-0 z-50 w-full h-14 space-x-3 md:space-x-10 bg-[#282829] text-center p-3' >
                   {customNavLink}
                </div>
                 
                </div>
            
           </div>
           
        </div>
    );
};

export default Root;