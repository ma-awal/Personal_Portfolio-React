import { motion } from 'framer-motion';
import { FaBriefcase, FaStar, FaScroll, FaGraduationCap } from 'react-icons/fa';
const experienceData = [
  {
    id: 1,
    title: 'Webflow Developer',
    company: 'Softvence Company',
    time: '2025 - Present',
    description:
      'Currently building and maintaining responsive websites using Webflow, focusing on client requirements and modern web design principles.',
    icon: 'briefcase',
  },
  {
    id: 2,
    title: 'Introduction to Computer Science (CS50)',
    company: 'Harvard University (online)',
    time: 'Ongoing (Enrolled 2024)',
    description:
      "Enrolled in Harvard's renowned CS50 course, gaining foundational knowledge in computer science, algorithms, and data structures.", // Updated description
    icon: 'education',
  },
  {
    id: 3,
    title: 'Self-Directed Projects',
    company: 'Personal Initiative',
    time: '2023 - 2024',
    description:
      'Developed various personal projects to strengthen skills in React, JavaScript, and modern frontend technologies.',
    icon: 'star',
  },
  {
    id: 4,
    title: 'Frontend Fundamentals Certification',
    company: 'SoloLearn (Online)',
    time: 'November 2022',
    description:
      'Completed comprehensive courses in React, Web Design, and Development fundamentals.',
    icon: 'certificate',
  },
];

const getIconComponent = (type) => {
  const iconClass = 'text-xl text-purple-200';
  switch (type) {
    case 'briefcase':
      return <FaBriefcase className={iconClass} />;
    case 'star':
      return <FaStar className={iconClass} />;
    case 'certificate':
      return <FaScroll className={iconClass} />;
    case 'education':
      return <FaGraduationCap className={iconClass} />;
    default:
      return <FaStar className={iconClass} />;
  }
};
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      id="experience"
      className="py-8 md:py-16 bg-[#190525] text-white"
    >
      <div className="container w-full max-w-7xl px-[20px] md:px-[40px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4  md:mb-6 text-white">
          My <span className="text-purple-400">Journey</span>{' '}
        </h2>
        <p className="text-lg md:text-2xl text-center text-gray-500 max-w-2xl mx-auto mb-8 md:mb-16">
          My Professional Journey & Key Milestones
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Vertical Timeline Line - now purple */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-600"></div>

          <div className="space-y-12">
            {experienceData.map((data, index) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.5 }}
                className={`flex flex-col md:flex-row items-start md:items-center w-full
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                {/* Timeline Dot/Icon Container with purple background */}
                <div
                  className={`
                    absolute left-4 md:left-1/2 -translate-x-1/2
                    w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center z-10
                    ${
                      index % 2 === 0
                        ? 'md:-translate-x-1/2'
                        : 'md:-translate-x-1/2'
                    }
                `}
                >
                  {/* Render the React Icon component  */}
                  {getIconComponent(data.icon)}
                </div>

                {/* Content Card */}
                <div
                  className={`
                   bg-gradient-to-tr from-transparent via-[#31163F] to-transparent rounded-lg shadow-lg p-6 border border-gray-700 hover:border-purple-600 {/* Hover border also purple */}
                    transition-all duration-300 flex-grow
                    ml-16 md:ml-0
                    max-w-[calc(100%-4rem)] md:max-w-[calc(50%-3rem)]
                    ${
                      index % 2 === 0
                        ? 'md:mr-auto md:text-left md:pr-10'
                        : 'md:ml-auto md:text-right md:pl-10'
                    }
                `}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {data.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-1">{data.company}</p>
                  <p className="text-md text-gray-500 mb-3">{data.time}</p>
                  <p className="text-gray-400 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
