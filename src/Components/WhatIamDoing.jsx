import { FaMobileAlt } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineCastForEducation } from "react-icons/md";


const WhatIamDoing = () => {
    return (
        <div className=" space-y-10 ">
           <div
       className=" flex flex-col md:flex-row items-center gap-4 bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20">
       <div
           className=" rounded-lg text-3xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
           <LiaLaptopCodeSolid />
       </div>
       <div>
           <h1 className="text-2xl font-bold text-white">Web Development</h1>
           <p className="text-gray-500 mt-2">
               Expertly crafting high-quality, dynamic web applications using the MERN stack (MongoDB, Express.js,
               React, and Node.js). From front-end to back-end, I deliver professional, scalable, and secure solutions
               tailored to your business needs. And continuously learning new technologies to improve my skills.
           </p>

       </div>
           </div>

           <div
       className=" flex flex-col md:flex-row items-center gap-4 bg-[#222223] p-5 rounded-2xl shadow-2xl shadow-white/10 border border-white/20">
       <div
           className=" rounded-lg text-3xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
          <FaMobileAlt />
       </div>
       <div>
    <h1 className="text-2xl font-bold text-white">App Development</h1>
    <p className="text-gray-500 mt-2">
        Specializing in high-quality mobile app development using Java and Kotlin. I create robust, user-friendly, and
        secure applications for Android, delivering professional solutions tailored to your business requirements.
    </p>

</div>
           </div>
           <div
       className=" flex flex-col md:flex-row items-center gap-4 bg-[#222223] p-5 rounded-2xl shadow-2xl shadow-white/10 border border-white/20">
       <div
           className=" rounded-lg text-3xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
         <MdOutlineCastForEducation />
       </div>
       <div>
       <h1 className="text-2xl font-bold text-white">Education</h1>
<p className="text-gray-500 mt-2">
  Currently pursuing a B.Sc in Computer Science and Engineering at Khulna University of Engineering and Technology, gaining a solid foundation in software development, algorithms, and system design.
</p>

</div>
           </div>
          
        </div>
    );
};

export default WhatIamDoing;