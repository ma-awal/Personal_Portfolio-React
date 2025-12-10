import { skillData } from '../data';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="skills"
      className="py-8 md:py-16"
    >
      <div className="container w-full max-w-7xl px-[20px] md:px-[40px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center  mb-4 md:mb-6">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-500 text-center text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-16">
          Here I have keep What skill I have
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto  ">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="   
                    transition-all duration-500 bg-gradient-to-tr from-transparent via-[#31163F] to-transparent  rounded-3xl px-6 py-12 hover:translate-y-2  cursor-pointer text-center md:text-start"
            >
              <skill.icon className="w-12 h-12 text-purple-400  mb-4 mx-auto md:ml-0 " />
              <h3 className="text-xl font-semibold mb-[4px]">{skill.title}</h3>
              <p className="text-gray-4 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-900 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
