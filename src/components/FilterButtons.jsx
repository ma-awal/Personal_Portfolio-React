 const FilterButtons = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
          selectedCategory === 'All'
            ? 'bg-purple-600 text-white shadow-md'
            : 'bg-[#1a0a2a] text-gray-300 hover:bg-purple-900/40'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
            selectedCategory === category
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-[#1a0a2a] text-gray-300 hover:bg-purple-900/40'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
