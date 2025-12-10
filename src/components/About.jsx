import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/remove.png';
import { FaLinkedin } from 'react-icons/fa';
import portfolio from '../assets/Portfolio.pdf';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="about"
      className="py-8 md:py-16"
    >
      <div className="container w-full max-w-7xl px-[40px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb- md:mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-500 text-center text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-16">
          Get to know my background and my passion
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-24    ">
          <div className="  w-full md:w-5/12   overflow-hidden relative rounded-2xl border-l-2 border-[#31163F] bg-gradient-to-tr from-transparent via-[#31163F] to-transparent  ">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // ✅ fixed
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={aboutImg}
              alt="About"
            />
          </div>
          <div className=" w-full md:w-6/12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // ✅ fixed
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.2 }}
            />
            <div className=" text-center md:text-left ">
              <h3 className="text-2xl font-semibold mb-6">Get Intro</h3>
              <p className="text-gray-300 mb-5">
                Hi, I’m Awal,a Front-End Web Developer currently working at
                Softvence as a Webflow Developer. Through delivering various
                client projects, I have gained valuable experience in
                professional workflow management and maintaining effective
                client communication.
              </p>
              <p className="text-gray-300 mb-5">
                While my main focus is Webflow, I also have practical
                familiarity with React, Node.js, Express, and MongoDB. I’ve
                earned certifications in Web Design, Development Fundamentals,
                and React from Sololearn, and I’m currently enrolled in
                Harvard’s CS50 to further strengthen my skills.
              </p>
              <p className="text-gray-300 mb-10">
                I enjoy creating modern, responsive, and user-friendly websites
                that bring ideas to life.
              </p>
              <a
                href="#"
                download={portfolio}
                className="px-6 py-3  rounded-lg font-medium hover:bg-purple-900 bg-purple-500 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* <div className="w-full md:w-2/12 ">
            <div className="relative flex flex-col items-center justify-center my-auto space-y-8 md:space-y-4 z-10">
              <span className="hidden md:visible absolute h-[400px] my-auto w-[2px] bg-purple-400 -z-10"></span>
              <div
                className=" border border-black hover:border-purple-600  
                    transition-all duration-500   bg-gradient-to-tr from-transparent via-[#76299c] to-transparent  flex flex-col py-5 md:px-6 md:py-4  justify-center items-center w-full rounded-2xl"
              >
                <h4 className="text-3xl font-bold text-white">30+</h4>
                <span className="text-base  font-semibold ">
                  Project Complted
                </span>
              </div>

              <div
                className="  border border-black hover:border-purple-600  
                    transition-all duration-500   bg-gradient-to-tr from-transparent via-[#76299c] to-transparent  flex flex-col py-5 md:px-6 md:py-4   justify-center items-center w-full rounded-2xl  "
              >
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <span className="text-base font-semibold  ">
                  {' '}
                  Problems Solved
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
