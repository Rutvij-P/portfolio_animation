import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const Portfolio = () => {
  // State to track which timeline item is open
  const [openItem, setOpenItem] = useState(null);

  // Timeline data could be props or fetched from an API
  const timelineData = [
    { id: 1, title: "VEHIQ – Founder, Software Engineer", year: "2023-Current", detail: "• Founder of VehiQ and Developed in UC Berkeley AI/LLM Hackathon • Spearheading groundbreaking car design startup • Creating an app that transforms hand-drawn car sketches into realistic 3D models • Leveraging advanced technologies like Convolutional Neural Networks (CNNs) and deep learning algorithms" },
    { id: 2, title: "SFSU – Software Engineer", year: "2020-2023", detail: "• FrontEnd Developer for an internal full stack web app designed to assist and connect SF State students and Bay Area recruiters • Utilized modern web technologies such as React, Typescript, Redux, and Tailwind for building a user-friendly interface. • Created and Implemented user profile creation, resume and portfolio uploads, and advanced job search functionality based on skills and experience." },
    { id: 3, title: "SFSU – Student Instructor", year: "2020-2023", detail: "• Mentored students with fair yet specific performance modules, offering support when needed, and providing constructive feedback on a case-by-case basis. • Retained interest and maximized receptive learning by educating students using hands-on instructional techniques. • Supported student learning objectives through personalized and small group assistance." },
    { id: 4, title: "SSM InfoTech – Software Intern", year: "2018-2018", detail: "• Designed and tested client-server network components. • Learned software engineering process improvements and best practices. • Assisted with the design and development of HTML projects." },
    // ... other timeline items
  ];

  // Function to toggle the open item
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const listItemVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 pt-20 bg-white">
      <div className="md:w-1/2 relative -translate-y-6">
  <p className="text-3xl">
    Software Engineer
  </p>
  {/* Image container with relative positioning */}
  <div className="relative ">
    <img src="/profilep-min.png" alt="Bastian Gasser" className="w-full rounded-lg" />
    {/* Absolute positioned text */}
    <div className="absolute top-0 left-0 w-full">
      <p className="text-2xl">
        San Francisco State University
      </p>
    </div>
  </div>
  <motion.div 
  className="md:w-full mt-4"
  initial="hidden"
  animate="visible"
  variants={listVariants}>
        {timelineData.map((item) => (
          <motion.div key={item.id} className="mb-1">
            <motion.div 
              className="cursor-pointer border-t border-black" 
              onClick={() => toggleItem(item.id)}
              layout
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <span className="text-sm">{item.year}</span>
              </div>
            </motion.div>
            <AnimatePresence>
            {openItem === item.id && (
              <motion.div 
              className="text-sm mt-1 leading-snug"
              initial="closed"
              animate="open"
              exit="closed"
              variants={listItemVariants}
              transition={{duration: 0.2}}>
                {item.detail}
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div className="cursor-pointer border-t border-black py-2"></div>
    </motion.div>
</div>

      <div className="md:w-1/3 space-y-6 mt-8 md:mt-0">
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Programming Languages:</h2>
          <p>JavaScript</p>
          <p>Python</p>
          <p>C++</p>
          <p>Java</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Web Development:</h2>
          <p>React</p>
          <p>Vue.js</p>
          <p>Node.js</p>
          <p>Django</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Database Management:</h2>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Connect here:</h2>
          <p>LinkedIN</p>
          <p>Github</p>
          <p>Dev.to</p>
          {/* ... more items */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
