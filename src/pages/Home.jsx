import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Experience from '../components/Experience';
import ContactSection from '../components/Contact';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ContactSection />
    </div>
  );
};
export default Home;
