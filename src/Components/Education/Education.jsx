import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  
 
   
 const DefaultTimeline = () =>{
    return (
      <div className="w-full h-full mt-10">
       
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon  color="yellow"/>
              <Typography variant="h6" color="white" className="leading-none md:text-xl ">
              Khulna University of Engineering & Technology (KUET)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="white" className="font-normal text-gray-600 my-4">
                <span className=" text-[#FDCB66] text-[16px]">2021-Present</span><br />
                <span className=" text-[16px] text-gray-400">CSE | Department of Computer Science and Engineering</span>
                <br />
                <span  className=" text-[16px] text-gray-400">CGPA : 3.24/4 </span>
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon  color="yellow"/>
              <Typography variant="h6" color="white" className="leading-none md:text-xl">
              Narail Govt. Victoria College (NVC)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="white" className="font-normal text-gray-600 my-4">
                <span className=" text-[#FDCB66] text-[16px]">2018-2020</span><br />
                <span className=" text-[16px] text-gray-400">Science | Higher Secondary School Certificate</span>
                <br />
                <span  className=" text-[16px] text-gray-400">GPA : 5.0/5.0 </span><br />
                <span  className=" text-[16px] text-gray-400">Scholarships : Merit Scholarship</span>
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon  color="yellow"/>
              <Typography variant="h6" color="white" className="leading-none md:text-xl">
              Narail Govt. High School (NGHS)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="white" className="font-normal text-gray-600 my-4">
                <span className=" text-[#FDCB66] text-[16px]">2018-2020</span><br />
                <span className=" text-[16px] text-gray-400">Science | Secondary School Certificate</span>
                <br />
                <span  className=" text-[16px] text-gray-400">GPA : 5.0/5.0 </span><br />
                <span  className=" text-[16px] text-gray-400">Scholarships : Merit Scholarship</span>
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }

  export default DefaultTimeline;