import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdAttachEmail, MdPhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
 
function NavList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-center md:gap-3">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <div>
          <div className=" flex gap-5 justify-center rounded-xl bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
            <Link to="https://github.com/NafiulHasan41" className=" text-3xl text-white"><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/nafiulhasan41" className=" text-3xl text-blue-600"><SiLinkedin /></Link>
            <Link to="https://drive.google.com/file/d/14GWNflJMk8K2A9--CaXldjmLz8zmUrCl/view?usp=sharing" className=" text-3xl text-white"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/8347/8347432.png" alt="Resume" /></Link>
          </div>
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
       <div className=" flex items-center gap-3">
          <div className=" rounded-lg text-2xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
          <MdAttachEmail />
          </div>
          <div>
            <h1 className=" text-[16px] font-semibold text-gray-500 ">Email</h1>
            <h1 className="text-white ">nafiulhasan125884@gmail.com</h1>
          </div>
       </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
         <div className=" flex items-center gap-3">
          <div className=" rounded-lg text-2xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
          <MdPhoneIphone />
          </div>
          <div>
            <h1 className=" text-[16px] font-semibold text-gray-500 ">Phone</h1>
            <h1 className="text-white ">(+880)1305727216</h1>
          </div>
       </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
          <div className=" flex items-center gap-3">
          <div className=" rounded-lg text-2xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
          <FaLocationDot />
          </div>
          <div>
            <h1 className=" text-[16px] font-semibold text-gray-500 ">Location</h1>
            <h1 className="text-white ">KUET, Khulna, Bangladesh</h1>
          </div>
       </div>
      </Typography>
  
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto rounded-lg lg:rounded-3xl p-3 bg-[#1E1E1F] border-white/15">
      <div className="flex lg:flex-col items-center justify-between text-white">
        <Typography
          as="a"
          variant="h6"
          className=" cursor-pointer py-1.5"
        >
          <div className=" flex flex-row gap-4 lg:flex-col">
            <div className=" flex items-center justify-center  bg-[#383839] p-2  rounded-lg h-14 w-14 md:h-28 md:w-28 lg:w-full lg:h-full">
              <img
                src="https://i.ibb.co/VSg1Y15/IMG-20240624-005231.jpg"
                alt="Nafiul Hasan image"
                className=" h-full w-full bg-cover bg-center rounded-lg"
              />
            </div>
            <div className=" flex flex-col items-center justify-center ">
              <h1 className=" text-white text-xl text-center md:text-2xl font-bold my-2">Nafiul Hasan</h1>
              <h1 className=" text-white text-xs lg:w-[70%] mx-auto md:text-[14px] font-bold text-center  bg-[#383839] p-1 rounded-lg">Web Developer</h1>

               <div className="hidden w-full lg:block border-2 mt-5 border-[#383839] ">

               </div>
            </div>
          </div>
        </Typography>
        <div className="hidden lg:block lg:my-3">
          <NavList />
        </div>
        <div className="lg:hidden flex flex-col md:flex-row md:gap-3 ">
          <p onClick={() => setOpenNav(!openNav)} className="hidden md:block  text-white font-semibold bg-[#282829] p-2 rounded-xl ">Show Contact</p>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
           (  <XMarkIcon className="h-6 w-6" strokeWidth={2} /> )
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        </div>
      
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavbarSimple;