import { motion } from 'framer-motion';
import profile from '../assets/remove.png';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <section
        id="home"
        className=" relative h-auto md:min-h-screen flex items-center justify-center pb-2 pt-30 md:pt-28   md:pb-8  z-10"
      >
        <div className="container w-full max-w-7xl px-[20px] md:px-[40px] mx-auto flex flex-col items-center justify-between md:flex-row gap-6 md:gap-0">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-start">
            <h1 className="text-4xl   md:text-6xl mb-4 font-bold ">
              Hi, I'am <span className="text-purple-400">Awal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-2 leading-normal">
              Front-End Developer |
              <span className="text-purple-300"> Webflow </span> & React
            </h2>
            <p className="text-lg text-gray-300 mb-6 ">
              Building production-ready Webflow websites and React-based
              front-end projects
            </p>
            <div className="flex justify-center md:justify-start space-x-4  ">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
              >
                View Project
              </Link>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className="px-6 py-3 border border-purple-500 hover:bg-purple-500 rounded-lg font-medium hover:bg-purple/20 transtion duration-300"
              >
                Profile
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center order-first md:order-last">
            <div className="w-full not-[]:h-full  flex justify-end  ">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                className=" rounded-full  animate-float z-10   border-l-2 border-[#31163F] bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-[2px]"
                src={profile}
                alt="image"
              ></motion.img>
            </div>
          </div>
        </div>
        <div className="fixed -right-[100px] bottom-[100px] w-[100px] h-[100px]  md:w-[500px] md:h-[300px] rounded-full bg-purple-400  blur-[400px] md:blur-[280px] -z-10"></div>

        <div className="fixed -left-[100px] top-[100px] md:w-[500px] w-[100px] h-[100px] md:h-[300px] rounded-full bg-purple-400 blur-[400px] md:blur-[280px]"></div>
      </section>
    </motion.div>
  );
};

export default Hero;
