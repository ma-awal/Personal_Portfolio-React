import project1 from './assets/urban-project.png';
import project2 from './assets/flexis.png';
import project3 from './assets/tria-project.png';
import project4 from './assets/aviva-project.png';
import project5 from './assets/fob-project.png';
import project6 from './assets/black-project.png';
import project7 from './assets/tasker-png.png';
import project8 from './assets/expense.png';
import project9 from './assets/projectify.png';
import project10 from './assets/next-edu.png';
import project11 from './assets/tech max.png';
import project12 from './assets/nine-start.png';
import { FaReact, FaGitAlt, FaTools, FaCode } from 'react-icons/fa';
import { SiWebflow, SiMongodb } from 'react-icons/si';

export const skillData = [
  {
    id: 1,
    title: 'Core',
    icon: FaCode,
    description:
      'Crafting elegant, accessible, and functional layouts using clean code practices.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'CMS',
    icon: SiWebflow,
    description:
      'Designing and maintaining CMS-based websites with animations and interactions.',
    tags: ['Webflow', 'Animation', 'CMS'],
  },
  {
    id: 3,
    title: 'Frontend Web Development',
    icon: FaReact,
    description:
      'Building responsive, interactive, and modern web apps using powerful frameworks.',
    tags: ['React', 'Tailwind', 'Bootstarp'],
  },
  {
    id: 4,
    title: 'Backend Familiarity',
    icon: SiMongodb,
    description:
      'Connecting the client-side with secure APIs, data storage, and authentication.',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Version Control',
    icon: FaGitAlt,
    description:
      'Managing collaborative development with effective version tracking systems.',
    tags: ['Git', 'GitHub', 'Vercel'],
  },
  {
    id: 6,
    title: 'Tools & Technologies',
    icon: FaTools,
    description:
      'Using creative and coding tools that enhance productivity and design workflow.',
    tags: ['Figma', 'Canva', 'VS Code'],
  },
];
export const projectData = [
  {
    id: 1,
    title: 'Urban MakeOver',
    image: project1,
    description:
      'Responsive home renovation website built with clean and modern design principles..',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://www.urbanmakeovers.ca',
    code: 'https://www.urbanmakeovers.ca',
  },
  {
    id: 2,
    title: 'Financial freedom',
    image: project2,
    description:
      'Educational finance platform designed to help academics manage money with clarity.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://www.schmidt-kanzlei.com/',
    code: 'https://www.schmidt-kanzlei.com/',
  },
  {
    id: 3,
    title: 'Trial Training, Reimagined',
    image: project3,
    description:
      'Interactive legal training site with realistic simulations and modern design principles.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://trialsim-3a7037.webflow.io/',
    code: 'https://trialsim-3a7037.webflow.io/',
  },
  {
    id: 4,
    title: 'Aviva Medtrans',
    image: project4,
    description:
      'Responsive booking platform for safe, reliable non-emergency medical transportation services.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://www.avivamedtrans.com/',
    code: 'https://www.avivamedtrans.com/',
  },
  {
    id: 5,
    title: 'FoblyTech ',
    image: project5,
    description:
      'Modern logistics platform empowering manufacturers and exporters with reliability.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://blackhouselogistics.com/',
    code: 'https://blackhouselogistics.com/',
  },
  {
    id: 6,
    title: 'BlackHouse Logistics',
    image: project6,
    description:
      'Easy RFID key-fob duplication service with fast online ordering and secure handling.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://foblytech.webflow.io/',
    code: 'https://foblytech.webflow.io/',
  },
  {
    id: 7,
    title: 'TaskManager App',
    image: project7,
    description:
      'Task manager app with React frontend for organizing and tracking self-directed projects',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React', // Added category
    live: 'https://1-task-manager-app.vercel.app/',
    code: 'https://github.com/ma-awal/1-TaskManager_App',
  },
  {
    id: 8,
    title: 'Expense Tracker App',
    image: project8,
    description:
      'Intuitive React app to track income and expenses with real-time balance updates',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React',
    live: 'https://2-expense-trakcer-app.vercel.app/',
    code: 'https://github.com/ma-awal/2_ExpenseTrakcer_App',
  },
  {
    id: 9,
    title: 'Porject Manager',
    image: project9,
    description:
      'Project management app to organize tasks by status—To-Do, In-Progress, Done, and Revise.',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React',
    live: 'https://4-project-manager-app.vercel.app/',
    code: 'https://github.com/ma-awal/4_ProjectManager_App',
  },
  {
    id: 10,
    title: 'NextEdu',
    image: project10,
    description:
      'Comprehensive education management system designed to streamline learning, administration.',
    tech: ['Bootstarp', 'React', 'Github'],
    category: 'React',
    live: 'https://next-edu-two.vercel.app/',
    code: 'https://github.com/ma-awal/Project_App_NextEdu',
  },
  {
    id: 11,
    title: 'TechMax',
    image: project11,
    description:
      'Modern tech solutions platform showcasing innovative services and digital transformation.',
    tech: ['Bootstarp', 'React', 'Github'],
    category: 'React',
    live: 'https://techmax.vercel.app/',
    code: 'https://github.com/ma-awal/Project_App_Techmax',
  },
  {
    id: 12,
    title: 'NineStar',
    image: project12,
    description:
      'Creative agency website highlighting branding, design, and digital innovation services.',
    tech: ['Bootstrap', 'JavaScript', 'Github'],
    category: 'Vanilla JS',
    live: 'https://ma-awal.github.io/Project_App_Ninestar/ ',
    code: 'https://github.com/ma-awal/Project_App_Ninestar',
  },
];
export const testimonials = [
  {
    id: 1,
    name: 'aurthurma',
    quote: 'Super Rapid,Super Precis!',
    rating: 5,
  },
  {
    id: 2,
    name: 'kelsie_akiha',
    quote: 'Always so great to work with.',
    rating: 5,
  },
  {
    id: 3,
    name: 'fellxschmldt617',
    quote:
      'The deslgn,the structure, the responsiveness - everything wastop-notch. I am truly happy with the final result.',
    rating: 5,
  },
  {
    id: 4,
    name: 'vaheol',
    quote:
      'Working with Awal was a breath of fresh air! His PROFESSIONALISM in website development, impeccable CODE expertise, and bug-free delivery were outstanding. Politenessand swift communication made collaboration a breeze; I can not wait to hire him again! Thank you, Awal!',
    rating: 5,
  },
  {
    id: 5,
    name: 'gunnarstelnn',
    quote:
      'Exceptional work! Every aspect of the website was crafted with precision and care. The attention to detail and understanding of my requirements were outstanding. Truly aseamless and professional experience - highly recommended!',
    rating: 5,
  },
];
export const navLinks = [
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
