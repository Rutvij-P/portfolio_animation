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
    { id: 1, title: "VEHIQ", description: "Founder, Fullstack software development, machine learning", year: "2023", image: "/vehiq.png", bgColor: "#FFC793" },
    { id: 2, title: "DOLI", description: "Fullstack Web Development, Database Engineer ", year: "2023", image: "/Doli.png", bgColor: "#93FFD8" },
    { id: 3, title: "JOB-GRAM", description: "Motion Graphics, Social Media, Social Learning", year: "2022", image: "/jobit.png", bgColor: "#FFEE93" },
    { id: 4, title: "PARALLAX SCROLL", description: "Motion Graphics, Social Media, Social Learning", year: "2022", image: "/parallaxscrollss.png", bgColor: "#FF93AB" },
    { id: 5, title: "3D PORTFOLIO", description: "Motion Graphics, Social Media, Social Learning", year: "2022", image: "/portfoliopagess.png", bgColor: "#93D8FF" },
    { id: 6, title: "GYM RECIPE APP", description: "Motion Graphics, Social Media, Social Learning", year: "2022", image: "/gymappss.png", bgColor: "#C793FF" },    
    { id: 7, title: "SUM HARNESS", description: "Motion Graphics, Social Media, Social Learning", year: "2022", image: "/cover.png", bgColor: "#93FFC7" },  
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
