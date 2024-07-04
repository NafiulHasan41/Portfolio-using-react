import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Progress, Typography } from "@material-tailwind/react";

const Skills = () => {
    return (
        <div>
      <Helmet>
          <title> Skills | Nafiul Hasan</title>
      </Helmet>
      {/* heading */}
      <h1 className='text-2xl lg:text-3xl font-semibold text-white'>My Skills</h1>
      <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>
      {/* frontend */}
      <div className='bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20'>
          <div>
              <div
                  className="font-bold rounded-lg text-xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
                  Front End
              </div>
          </div>

          <div className=' my-5 p-2 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5'>
              
              {/* skill card start */}
              <div className='  '>
                  <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto   ">
                      <div  className="w-full h-48 hover:scale-110   bg-gray-300 bg-center bg-cover rounded-lg  shadow-2xl shadow-white/40 border border-white/90 " style={{
             backgroundImage:
                      "url(https://miro.medium.com/v2/resize:fit:1200/1*jDIj2SKAE-Bp32owLoHDjw.png)"
            }}></div>

                      <div className="w-56 -mt-10  overflow-hidden bg-[#FEC462]  rounded-lg  md:w-64   border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px] ">
                          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">React.js</h3>

                          <div className="flex bg-[#383839] items-center justify-center px-3 py-2 ">
                              <span className="font-bold text-white dark:text-gray-200">Advanced</span>

                          </div>
                      </div>
                  </div>

              </div>
              {/* skill card end */}

              {/* Tailwind CSS skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGcLxZTf6jAMy8rSmEePU6xuLfXZzDNFXkcCvn250CkDGTtz_vI4eI72ORTzTgCwnejg&usqp=CAU)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#38B2AC] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Tailwind CSS</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Tailwind CSS skill card end */}

{/* Bootstrap skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQvo7DiCYq0KDfGNiQFlNiaozrX5Ze03TbQ&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#7952B3] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Bootstrap</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Bootstrap skill card end */}

{/* Material-UI skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1200/1*fEyeESs-HxVR7Zlr-fdlvw.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#007FFF] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Material-UI</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Material-UI skill card end */}

{/* HTML5 skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CbpLmM3tRJzlp_xAaiOOJRU1ICCAX8Ns1Q&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#E44D26] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">HTML5</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* HTML5 skill card end */}

{/* CSS3 skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#1572B6] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">CSS3</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* CSS3 skill card end */}

{/* JavaScript skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#F7DF1E] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">JavaScript (ES6+)</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* JavaScript skill card end */}

{/* Responsive Design skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#4CAF50] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Responsive Design</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Responsive Design skill card end */}
              

          </div>
      </div>



      {/* Backend */}
      <div className='bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20 my-5 lg:my-10'>
          <div>
              <div
                  className=" rounded-lg font-bold text-xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
                  Backend
              </div>
          </div>
          <div className=' my-5 p-2 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5'>
            {/* Node.js skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTogwU6U5z0Zf2lUxTE72JAKxVd52klwPe-Q&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#68A063] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Node.js</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Node.js skill card end */}

{/* Express.js skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#000000] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-400 uppercase">Express.js</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Express.js skill card end */}

{/* RESTful APIs skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://restfulapi.net/wp-content/uploads/what-is-rest-api.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FF7043] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">RESTful APIs</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* RESTful APIs skill card end */}

{/* JWT skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWh6M5DDtiB2lfeXubYroYn3zLdt72Nd705g&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#00AEEF] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">JWT</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* JWT skill card end */}

{/* OAuth skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-user-authentication-628x353.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#4285F4] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">OAuth</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* OAuth skill card end */}

{/* Middleware skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5-r2zIQb615YyKftghCkzfbz5aMh74aDaQ&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#E91E63] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Middleware</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Middleware skill card end */}

{/* CORS skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA_gkufVCImO9Hw-aPk0fybz2o7f0WZ5zIw&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FF9800] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">CORS</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* CORS skill card end */}

{/* Axios skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://media.licdn.com/dms/image/D4D12AQHOO3M_hDU_Zg/article-cover_image-shrink_720_1280/0/1680896113350?e=2147483647&v=beta&t=cg6_768-cey38mAqmbUWuGDhrb7XOuTTXTXz2Mm8QB4)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#5A29E4] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Axios</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Axios skill card end */}


          </div>
      </div>




      {/* Database */}
      <div className='bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20 my-5 lg:my-10'>
          <div>
              <div
                  className=" rounded-lg font-bold text-xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
                  Database
              </div>
          </div>
          <div className=' my-5 p-2 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5'>
            
            {/* MongoDB skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#47A248] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">MongoDB</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* MongoDB skill card end */}

{/* MySQL skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://media.licdn.com/dms/image/D4E12AQFZk_BOEXMuxw/article-cover_image-shrink_720_1280/0/1711355118921?e=2147483647&v=beta&t=jzVwHgAOrrn0HsRH1b8IMkyc_Y6Te0cg38JYZNTF-dw)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#4479A1] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">MySQL</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* MySQL skill card end */}

{/* Oracle DB skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://media.licdn.com/dms/image/D4E12AQEVNA7Qh_r24A/article-cover_image-shrink_720_1280/0/1711009445506?e=2147483647&v=beta&t=YisAZwCYZ9M5Kc3ZB6GuCDyC0Dz2WaDR-VM0_9_yCAk)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#F80000] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Oracle DB</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Oracle DB skill card end */}

{/* Aggregation skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://cyberhoot.com/wp-content/uploads/2020/07/59e4c47a969a8419d70caede46ec5b7c88b3bdf5-1024x576.jpg)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FF9800] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Aggregation</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Aggregation skill card end */}

{/* Indexing and Performance Optimization skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaKKSMAUOALY4pHFw9Hw_yg1Pu-43WbTSzw&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#4CAF50] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Indexing & Performance Optimization</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Indexing and Performance Optimization skill card end */}

{/* Data Modeling skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEvIMlKhrPjTEeKXsIDcy_XEL-ei8JsOLUQ&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#0288D1] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Data Modeling</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Data Modeling skill card end */}


          </div>
      </div>
      {/* Tools */}
      <div className='bg-[#222223] p-5  rounded-2xl shadow-2xl shadow-white/10 border border-white/20 my-5 lg:my-10'>
          <div>
              <div
                  className=" rounded-lg font-bold text-xl text-[#FEC462] bg-[#282829] p-2 border-t-gray-600 border-l-gray-600 border-t-2 border-l-2">
                  Soft Skills
              </div>
          </div>
          <div className=' my-5 p-2 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5'>
             {/* Problem-Solving skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://media.licdn.com/dms/image/D4D12AQHo7N748YPP5g/article-cover_image-shrink_600_2000/0/1709915213456?e=2147483647&v=beta&t=a_mq0XenyCIhpoGufVJZD--7MThYidAaChIza9uGim8)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FF7043] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Problem-Solving</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Problem-Solving skill card end */}

{/* Team Collaboration skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://blogimage.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#00ACC1] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Team Collaboration</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Team Collaboration skill card end */}

{/* Effective Communication skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://elearningindustry.com/wp-content/uploads/2023/10/Navigating-Success-Through-Effective-Communication-Skills.jpg)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#43A047] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Effective Communication</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Effective Communication skill card end */}

{/* Adaptability skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://whatfix.com/blog/wp-content/uploads/2021/10/Adaptablity-in-workplace.png)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FB8C00] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Adaptability</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Adaptability skill card end */}

{/* Continuous Learning skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://cdn.educba.com/academy/wp-content/uploads/2023/11/Continuous-Learning.jpg)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#1E88E5] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Continuous Learning</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Continuous Learning skill card end */}

{/* Attention to Detail skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKkrjazXnc3Yn3fZp5siPgfWuPWwk2rLBIg&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#D32F2F] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Attention to Detail</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Attention to Detail skill card end */}

{/* Critical Thinking skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://tscfm.org/wp-content/uploads/2021/04/why-is-critical-thinking-important.jpg)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#8E24AA] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Critical Thinking</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Critical Thinking skill card end */}

{/* Agile Methodologies skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://assets.asana.biz/transform/f3519623-44e4-4506-8e1f-38cb74819c58/inline-agile-agile-methodology-1-2x)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#FFEB3B] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Agile Methodologies</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Intermediate</span>
            </div>
        </div>
    </div>
</div>
{/* Agile Methodologies skill card end */}

{/* Self-Motivation skill card start */}
<div className=''>
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-48 hover:scale-110 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-white/40 border border-white/90" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrfjJb-9H8jyEGLvGKzKYxceVc9gCFWVOjg&s)"
        }}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-[#F4511E] rounded-lg md:w-64 border-b-gray-500 border-r-gray-500 border-b-[5px] border-r-[5px]">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">Self-Motivation</h3>

            <div className="flex bg-[#383839] items-center justify-center px-3 py-2">
                <span className="font-bold text-white dark:text-gray-200">Advanced</span>
            </div>
        </div>
    </div>
</div>
{/* Self-Motivation skill card end */}


          </div>
      </div>

  </div>
    );
};

export default Skills;