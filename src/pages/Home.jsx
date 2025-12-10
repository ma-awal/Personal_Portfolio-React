import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Experience from '../components/Experience';
import Review from '../components/Review';
import ContactSection from '../components/Contact';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Review />
      <ContactSection />
    </div>
  );
};
export default Home;
