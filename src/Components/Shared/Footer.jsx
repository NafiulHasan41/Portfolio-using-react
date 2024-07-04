import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#282829] rounded-xl shadow-2xl shadow-white/10 border border-white/20 lg:my-20">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link>
            <img className="w-auto h-14 rounded-xl" src="https://i.ibb.co/1nC2Tb3/Nafiul-Hasan-Logo.jpg" alt="" />
          </Link>
      
          <p className="text-sm text-white ">© Copyright 2024. All Rights Reserved To Nafiul Hasan</p>
      
          <div className="flex -mx-2 gap-5">
          <Link to="https://github.com/NafiulHasan41" className=" text-3xl text-white"><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/nafiulhasan41" className=" text-3xl text-blue-600"><SiLinkedin /></Link>
            <Link to="https://drive.google.com/file/d/14GWNflJMk8K2A9--CaXldjmLz8zmUrCl/view?usp=sharing" className=" text-3xl text-white"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/8347/8347432.png" alt="Resume" /></Link>
      
        
          </div>
        </div>
      </footer>
    );
};

export default Footer;