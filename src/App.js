import React, {useState} from 'react';
import CursorRevealText from './components/CursorRevealText';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { motion } from 'framer-motion';


function App() {
  // Define your projects array or fetch it from an API
  const projects = [
    { id: 1, title: "MATE", description: "Motion Graphics, Social Media, Social Learning", year: "2023", image: "/gymappss.png", bgColor: "#C793FF" },
    { id: 2, title: "KATE", description: "Motion , Social , Social ", year: "2123", image: "/parallaxscrollss.png", bgColor: "#93FFD8" },
    { id: 3, title: "FATE", description: "Motion Graphics, Social Media, Social Learning", year: "2023", image: "/jobit.png", bgColor: "#FFEE93" },  
    // ... other project objects
  ];

  const [sectionBgColor, setSectionBgColor] = useState('');


  const borderVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 0.8 } }
  };

  const handleProjectHover = (color) => {
    setSectionBgColor(color);
  }

  return (
    <div className="App" style={{ backgroundColor: sectionBgColor}}>
      <Navbar />
      <CursorRevealText />
      {projects.map((project, index) => (
        <Project
          key={project.id}
          id={index + 1}
          title={project.title}
          description={project.description}
          year={project.year}
          image={project.image}
          last={index === projects.length - 1}
          onHover={() => handleProjectHover(project.bgColor)}
          onHoverEnd={() => handleProjectHover('')}
        />       
      ))}
      <motion.div className="my-8 border-b-4 w-screen border-black" variants={borderVariants} />
      <Portfolio />
      <Contact />
      {/* other components */}
    </div>
  );
}

export default App;
