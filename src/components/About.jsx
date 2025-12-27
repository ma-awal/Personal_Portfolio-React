import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/remove.png';
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
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-24
            "
        >
          <div className="  w-full md:w-5/12   overflow-hidden relative rounded-2xl border-l-2 border-[#31163F] bg-gradient-to-tr from-transparent via-[#31163F] to-transparent  ">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.2 }}
            />
            <div className=" text-center md:text-left     ">
              <h3 className="text-2xl font-semibold mb-6">Get Intro</h3>
              <p className="text-gray-300 mb-5 ">
                I’m Front-End Developer specializing in React and modern
                JavaScript. I build interactive UI components, manage
                application state, and create responsive layouts using modern
                front-end tools.
              </p>
              <p className="text-gray-300 mb-5">
                Alongside my front-end development journey, I work
                professionally as a Webflow Developer at Softvence, where I
                deliver production-ready client websites. This experience has
                given me strong fundamentals in layout, responsiveness, and
                real-world project requirements.
              </p>
              <p className="text-gray-300 mb-10">
                I’m currently focused on strengthening my React skills through
                hands-on personal projects and practical front-end development.
              </p>
              <a
                href={portfolio}
                download
                className="px-6 py-3  rounded-lg font-medium hover:bg-purple-900 bg-purple-500 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
