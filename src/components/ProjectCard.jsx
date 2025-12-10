import { FiExternalLink } from 'react-icons/fi';
import { FaEye, FaGithub } from 'react-icons/fa';
import project1 from '../assets/fina.jpg';

const ProjectCard = ({ project, isWebflow }) => {
  const { title, image, description, tech, live, code } = project;

  return (
    <div className=" space-y-6 bg-gradient-to-tr from-transparent via-[#31163F] to-transparent   cursor-pointer rounded-2xl overflow-hidden border border-gray-800   ">
      <img
        src={image || project1}
        alt={title}
        className="mb-4 w-full  min-h-[250px] object-cover  border-b border-b-gray-800 p-2 rounded-tr-2xl rounded-tl-2xl     "
      />

      <div className="px-3 space-y-4  ">
        <h3 className="text-xl font-semibold mb-[4px]">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(tech) &&
            tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-purple-900 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="flex justify-center gap-4  bg-purple-900  space-x-4      px-2 py-3 hover:bg-purple-700 transition duration-500 ">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className=" border-b border-transparent hover:border-b hover:border-b-purple-400 transition duration-500    flex items-center justify-between gap-2 pb-1"
        >
          <FiExternalLink className="text-2xl" /> Live
        </a>

        {isWebflow ? (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className=" border-b border-transparent hover:border-b hover:border-b-purple-400 transition duration-500    flex items-center justify-between gap-2 pb-1"
          >
            {/* <FaEye className="text-2xl" /> Preview */}
            {''}
          </a>
        ) : (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className=" border-b border-transparent hover:border-b hover:border-b-purple-400 transition duration-500    flex items-center justify-between gap-2 pb-1"
          >
            <FaGithub className="text-xl" /> Github
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
