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
              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          React.js
                      </Typography>
                      <Typography color="amber" variant="h6">
                          90%
                      </Typography>
                  </div>
                  <Progress color='amber' value={90} />
              </div>
              <div>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto ">
        <div className="w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md border " style={{
      backgroundImage:
        "url(https://miro.medium.com/v2/resize:fit:1200/1*jDIj2SKAE-Bp32owLoHDjw.png)"
    }}></div>

        <div className="w-56 -mt-10  overflow-hidden bg-[#FEC462] rounded-lg shadow-lg md:w-64 ">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">Nike Revolt
            </h3>

            <div className="flex items-center justify-center px-3 py-2">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
               
            </div>
        </div>
    </div>

</div>
              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          Tailwind CSS
                      </Typography>
                      <Typography color="amber" variant="h6">
                          85%
                      </Typography>
                  </div>
                  <Progress color='amber' value={85} />
              </div>

              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          Bootstrap
                      </Typography>
                      <Typography color="amber" variant="h6">
                          80%
                      </Typography>
                  </div>
                  <Progress color='amber' value={80} />
              </div>

              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          Material-UI
                      </Typography>
                      <Typography color="amber" variant="h6">
                          75%
                      </Typography>
                  </div>
                  <Progress color='amber' value={75} />
              </div>

              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          HTML5
                      </Typography>
                      <Typography color="amber" variant="h6">
                          95%
                      </Typography>
                  </div>
                  <Progress color='amber' value={95} />
              </div>

              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          CSS3
                      </Typography>
                      <Typography color="amber" variant="h6">
                          90%
                      </Typography>
                  </div>
                  <Progress color='amber' value={90} />
              </div>

              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          JavaScript (ES6+)
                      </Typography>
                      <Typography color="amber" variant="h6">
                          85%
                      </Typography>
                  </div>
                  <Progress color='amber' value={85} />
              </div>
              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="white" variant="h6">
                          Responsive Design
                      </Typography>
                      <Typography color="amber" variant="h6">
                          95%
                      </Typography>
                  </div>
                  <Progress color='amber' value={95} />
              </div>

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
          <div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Node.js
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Express.js
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            RESTful APIs
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            JWT
        </Typography>
        <Typography color="amber" variant="h6">
            75%
        </Typography>
    </div>
    <Progress color='amber' value={75} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            OAuth
        </Typography>
        <Typography color="amber" variant="h6">
            70%
        </Typography>
    </div>
    <Progress color='amber' value={70} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Middleware
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Cors
        </Typography>
        <Typography color="amber" variant="h6">
            75%
        </Typography>
    </div>
    <Progress color='amber' value={75} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Axios
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

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
          <div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            MongoDB
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            MySQL
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Oracle DB
        </Typography>
        <Typography color="amber" variant="h6">
            75%
        </Typography>
    </div>
    <Progress color='amber' value={75} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Aggregation
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Indexing and Performance Optimization
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Data Modeling
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>

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
          <div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Problem-Solving
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Team Collaboration
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Effective Communication
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Adaptability
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Continuous Learning
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Attention to Detail
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Critical Thinking
        </Typography>
        <Typography color="amber" variant="h6">
            85%
        </Typography>
    </div>
    <Progress color='amber' value={85} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Agile Methodologies
        </Typography>
        <Typography color="amber" variant="h6">
            80%
        </Typography>
    </div>
    <Progress color='amber' value={80} />
</div>

<div className="w-full">
    <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
            Self-Motivation
        </Typography>
        <Typography color="amber" variant="h6">
            90%
        </Typography>
    </div>
    <Progress color='amber' value={90} />
</div>


            </div>
        </div>

  </div>
    );
};

export default Skills;