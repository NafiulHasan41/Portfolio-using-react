import { Helmet } from "react-helmet-async";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div>
    <Helmet>
         <title> Projects | Nafiul Hasan</title>
     </Helmet>
     <h1 className='text-2xl lg:text-3xl font-semibold text-white'>My Projects</h1>
     <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>
    {/* projects */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5  my-5 bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20 ">
     <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
             style={{ backgroundImage: "url('https://i.ibb.co/c6xkKjM/Camp-Medic.png')" }}>
             <div
                 className="flex flex-col text-center justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                 <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                     CampMedic
                 </h2>
                 <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase">
                     Medical Camp Management System Website || (MERN Full Stack)
                 </p>
                 <div className=" flex gap-5 w-[50%] mx-auto justify-center my-3">
                     <Link to="https://github.com/NafiulHasan41/CampMedic_Client"
                         className=" hover:scale-150 text-3xl text-white">
                     <FaGithub />
                     </Link>
                     <Link to="https://github.com/NafiulHasan41/CampMedic_Client"
                         className="hover:scale-150 text-3xl text-black">
                     <FaGithubSquare />
                     </Link>
                     <Link to="https://medical-campmanagement.web.app"
                         className="hover:scale-150 text-3xl text-[#FFBE5F]"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path
                             d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                     </svg>
                     </Link>

                 </div>
             </div>
     </div>
     <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
             style={{ backgroundImage: "url('https://i.ibb.co/Y2x27DM/Joblisting.png')" }}>
             <div
                 className="flex flex-col text-center justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                 <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                 CareerCanvas
                 </h2>
                 <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase">
                    Job Listing website || (MERN Full stack)
                 </p>
                 <div className=" flex gap-5 w-[50%] mx-auto justify-center my-3">
                     <Link to="https://github.com/NafiulHasan41/Job-listing-website-Client"
                         className=" hover:scale-150 text-3xl text-white">
                     <FaGithub />
                     </Link>
                     <Link to="https://github.com/NafiulHasan41/Job-listing-website-server"
                         className="hover:scale-150 text-3xl text-black">
                     <FaGithubSquare />
                     </Link>
                     <Link to="https://job-listing-site-91a79.web.app"
                         className="hover:scale-150 text-3xl text-[#FFBE5F]"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path
                             d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                     </svg>
                     </Link>

                 </div>
             </div>
     </div>
     <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
             style={{ backgroundImage: "url('https://i.ibb.co/LQhrbz7/Explore-Asia.png')" }}>
             <div
                 className="flex flex-col text-center justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                 <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                 Explore South Asia
                 </h2>
                 <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase">
                 Tour guide Website || (MERN)
                 </p>
                 <div className=" flex gap-5 w-[50%] mx-auto justify-center my-3">
                     <Link to="https://github.com/NafiulHasan41/Tour-Guide-website-client"
                         className=" hover:scale-150 text-3xl text-white">
                     <FaGithub />
                     </Link>
                     <Link to="https://github.com/NafiulHasan41/Tour-Guide-website-server"
                         className="hover:scale-150 text-3xl text-black">
                     <FaGithubSquare />
                     </Link>
                     <Link to="https://explore-asia-tour-guid.netlify.app"
                         className="hover:scale-150 text-3xl text-[#FFBE5F]"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path
                             d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                     </svg>
                     </Link>

                 </div>
             </div>
     </div>
     <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
             style={{ backgroundImage: "url('https://i.ibb.co/m5szsXJ/ShoeShop.png')" }}>
             <div
                 className="flex flex-col text-center justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                 <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                 Cross Country
                 </h2>
                 <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase">
                 Shoe Shop Website || (MERN Full Stack)
                 </p>
                 <div className=" flex gap-5 w-[50%] mx-auto justify-center my-3">
                     <Link to="https://github.com/NafiulHasan41/shoe-shop-client-/tree/main"
                         className=" hover:scale-150 text-3xl text-white">
                     <FaGithub />
                     </Link>
                     <Link to="https://github.com/NafiulHasan41/shoe-shop-client-/tree/main"
                         className="hover:scale-150 text-3xl text-black">
                     <FaGithubSquare />
                     </Link>
                     <Link to="https://github.com/NafiulHasan41/shoe-shop-client-/tree/main"
                         className="hover:scale-150 text-3xl text-[#FFBE5F]"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path
                             d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                     </svg>
                     </Link>

                 </div>
             </div>
     </div>
     </div>
    </div>
    );
};

export default Projects;