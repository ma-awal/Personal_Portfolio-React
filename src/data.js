import project1 from './assets/urban-project.png';
import project2 from './assets/flexis.png';

import urban from './assets/urban-style.png';
import foddie from './assets/foodie-express.png';
import mess from './assets/smart-mess.png';
import tasker from './assets/tasker-app.png';
import wallet from './assets/wallet-image.png';
import project from './assets/project-manager.png';
import ztrm from './assets/ztrm.png';
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
    id: 3,
    title: 'Frontend Stack',
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
    id: 2,
    title: 'CMS',
    icon: SiWebflow,
    description:
      'Designing and maintaining CMS-based websites with animations and interactions.',
    tags: ['Webflow', 'Animation', 'CMS'],
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
    title: 'UrbanStyle Ecommerce',
    image: urban,
    description:
      'Modern ecommerce platform with admin dashboard, inventory management, and secure checkout using React.',
    tech: ['React', 'Firebase', 'Bootstarp'],
    category: 'React',
    live: 'https://urban-style-app.vercel.app/',
    code: 'https://github.com/ma-awal/Urban_Style_App',
  },
  {
    id: 2,
    title: 'FoodieExpress',
    image: foddie,
    description:
      'Real-time food delivery app with live order tracking and kitchen management system using React.',
    tech: ['React', 'Firebase', 'Bootstarp'],
    category: 'React',
    live: 'https://foodie-express-eight.vercel.app/',
    code: 'https://github.com/ma-awal/Foodie_Express_App',
  },
  {
    id: 3,
    title: 'Smart Mess Manager',
    image: mess,
    description:
      'Smart mess management tool using React and Firebase for automated meal and expense tracking.',
    tech: ['React', 'Firebase', 'Bootstarp'],
    category: 'React',
    live: 'https://bazar-app-blond.vercel.app/',
    code: 'https://github.com/ma-awal/Smart_Mess_App',
  },

  {
    id: 4,
    title: 'Task Manager App',
    image: tasker,
    description:
      'Task manager app with React frontend for organizing and tracking self-directed projects',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React', // Added category
    live: 'https://1-task-manager-app.vercel.app/',
    code: 'https://github.com/ma-awal/1-TaskManager_App',
  },
  {
    id: 5,
    title: ' Smart Wallet App',
    image: wallet,
    description:
      'Intuitive React app to track income and expenses with real-time balance updates',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React',
    live: 'https://2-expense-trakcer-app.vercel.app/',
    code: 'https://github.com/ma-awal/2_ExpenseTrakcer_App',
  },
  {
    id: 6,
    title: 'Porject Manager App',
    image: project,
    description:
      'Project management app to organize tasks by status—To-Do, In-Progress, Done, and Revise.',
    tech: ['Tailwind', 'React', 'Github'],
    category: 'React',
    live: 'https://4-project-manager-app.vercel.app/',
    code: 'https://github.com/ma-awal/4_ProjectManager_App',
  },

  {
    id: 7,
    title: 'Ztrm',
    image: ztrm,
    description:
      'Developed a Webflow site for ZTRM that empowers creators to connect with their..',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://ztrm.webflow.io/',
    code: 'https://ztrm.webflow.io/',
  },
  {
    id: 8,
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
    id: 9,
    title: 'Financial freedom',
    image: project2,
    description:
      'Educational finance platform designed to help academics manage money with clarity.',
    tech: ['Webflow', 'CMS', 'Animation'],
    category: 'Webflow',
    live: 'https://www.schmidt-kanzlei.com/',
    code: 'https://www.schmidt-kanzlei.com/',
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
