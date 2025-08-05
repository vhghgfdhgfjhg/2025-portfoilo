import React from "react";
// import { TextReveal } from "./ui/text-reveal";

const About: React.FC = () => {
  return (
    <>
     <div className=" max-h-screen flex items-center justify-center  font-sans bg-transparent h-[524px] flex-wrap p-4 bg-blue-50 bg-opacity-20  rounded-xl">
      <div className=" flex flex-col text-justify">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-50  ">About</h1>
        <p className=" pt-4 text-xl">
          I'm a <span className=" text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600 ">frontend developer</span> who brings ideas to life with user-friendly,
          impactful web experiences using <span className=" text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600">React</span> and <span className=" text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600">modern UI</span> technologies.
        </p>
      </div>
      <div className=" flex flex-col w-full">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-50">Education</h1>
        <p className=" text-3xl pt-2 font-semibold">B.E. in Electronics & Communication</p>
        <p className=" text-2xl font-semibold">JNN College of Engineering</p>
        <p className=" text-2xl font-semibold">India, 7.8 CGPA</p>
      </div>
    </div></>
   
  );
};

export default About;
