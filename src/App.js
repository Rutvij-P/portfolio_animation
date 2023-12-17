import React from 'react';
import CursorRevealText from './components/CursorRevealText';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import jobit from './images/jobit.png';
import gymapp from './images/gymappss.png';
import parallaxscroll from './images/parallaxscrollss.png';
import vehiq from './images/vehiq.png';
import portfoliop from './images/portfoliopagess.png';
// ... other imports

function App() {
  // Define your projects array or fetch it from an API
  const projects = [
    { id: 1, title: "MATE", description: "Motion Graphics, Social Media, Social Learning", year: "2023", image: {jobit} },
    { id: 2, title: "KATE", description: "Motion , Social , Social ", year: "2123", image: "../src/images/jobit.png" },
    { id: 3, title: "FATE", description: "Motion Graphics, Social Media, Social Learning", year: "2023", image: "../src/images/parallaxscrollss.png" },  
    // ... other project objects
  ];

  return (
    <div className="App">
      <Navbar />
      <CursorRevealText />
      <div className="max-w-4xl mx-auto my-8 border-t-2 border-black"></div>
      {projects.map((project, index) => (
        <Project
          key={project.id}
          id={index + 1}
          title={project.title}
          description={project.description}
          year={project.year}
          image={project.image}
          last={index === projects.length - 1}
        />       
      ))}
      {/* other components */}
    </div>
  );
}

export default App;
