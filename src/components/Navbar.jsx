import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import brand from '../assets/brand.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];
  const SCROLL_DURATION = 800;
  const TOP_OFFSET = 70;

  return (
    <nav className="fixed z-50 w-full bg-dark-100/90 backdrop-blur-lg py-4 px-8 shadow-lg">
      <div className="container w-full max-w-7xl px-[20px] md:px-[px] mx-auto flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={SCROLL_DURATION}
          offset={TOP_OFFSET}
          className="text-3xl text-white font-bold cursor-pointer"
          onClick={() => setShowMenu(false)} // Close menu on brand click
        >
          <img src={brand} alt="img" className="object-cover" />
        </Link>
        {/* nav-link */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-white/80 transition duration-300 hover:text-purple-500 group cursor-pointer"
              activeClass="text-purple" // Class applied when the link is active
              spy={true} // Makes Link react to scroll events and update its active state
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-purple-500"></span>
            </Link>
          ))}
        </div>

        {/* mobile-nav */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white transition-all duration-300"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white transition-all duration-300"
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden h-screen bg-dark-300 mt-4 p-4 rounded-lg flex flex-col space-y-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setShowMenu(false)} // Close mobile menu on link click
              className="relative text-white/80 transition duration-300 hover:text-purple group cursor-pointer text-lg py-2"
              activeClass="text-purple font-semibold"
              spy={true}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
