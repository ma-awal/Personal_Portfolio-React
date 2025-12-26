import { useState } from 'react';
import { projectData } from '../data.js';
import ProjectCard from './ProjectCard';
import FilterButtons from './FilterButtons';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Project = () => {
  const PROJECTS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [techSearchTerm, setTechSearchTerm] = useState('');

  const getUniqueCategories = () => {
    const desiredOrder = ['React', 'Vanilla JS', 'Webflow'];

    return desiredOrder.filter((category) =>
      projectData.some(
        (project) =>
          project.category === category ||
          (category === 'Vanilla JS' &&
            project.tech?.some((tech) =>
              tech.toLowerCase().includes('javascript')
            ))
      )
    );
  };

  const uniqueCategories = getUniqueCategories();
  let filteredProjects = projectData;

  // Filter by selected category
  if (selectedCategory !== 'All') {
    if (selectedCategory === 'Vanilla JS') {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.tech.includes('JavaScript (Vanilla)') ||
          (project.tech.includes('JavaScript') &&
            !project.tech.some((tech) => ['Next.js'].includes(tech)))
      );
    } else if (selectedCategory === 'Webflow') {
      filteredProjects = filteredProjects.filter(
        (project) => project.category === 'Webflow'
      );
    } else {
      filteredProjects = filteredProjects.filter(
        (project) => project.category === selectedCategory
      );
    }
  }

  // Then filter by tech search term
  if (techSearchTerm) {
    const term = techSearchTerm.toLowerCase();
    filteredProjects = filteredProjects.filter((project) =>
      project.tech.some((techItem) => techItem.toLowerCase().includes(term))
    );
  }

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Handlers
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
    setTechSearchTerm(''); //Clear tech search when category changes
  };

  const handleTechSearchChange = (e) => {
    setTechSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on tech search change
    setSelectedCategory('All'); // Clear category selection when tech searching
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="projects"
      className="py-8 md:py-16"
    >
      <div className="container w-full max-w-7xl px-[20px] md:px-[40px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 md:mb-6">
          My <span className="text-purple-400">Project</span>
        </h2>
        <p className="text-gray-500 text-center text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-16">
          Explore a selection of my recent work and skill applications.
        </p>

        {/* Category Filter Buttons */}
        <FilterButtons
          categories={uniqueCategories.filter((cat) => cat !== 'All')}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Tech Stack Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by tech stack (e.g., React, Tailwind, Bootstrap)"
            value={techSearchTerm}
            onChange={handleTechSearchChange}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-[#1a0a2a] border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.id || index}
                isWebflow={project.category === 'Webflow'}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 text-lg">
              No projects found matching your filters.
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition duration-300 ${
                currentPage === 1
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'hover:bg-purple-900/40'
              }`}
            >
              <FaArrowLeft />
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                  currentPage === number
                    ? 'bg-purple-600 text-white'
                    : 'hover:bg-purple-900/40'
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition duration-300 ${
                currentPage === totalPages
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'hover:bg-purple-900/40'
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
