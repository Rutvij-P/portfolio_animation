import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import '../styles/Contact.css';

const ContactSection = () => {
    const skills = [
    "INTERFACEDESIGN (UX/UI)",
    "MOTION DESIGN",
    "FOTOGRAFIE (ANALOG/DIGITAL)",
    "STRATEGIE & KONZEPTION",
    "VISUELLE IDENTITÄTEN",
    // ... more skills
  ];

  const duplicatedSkills = [...skills, ...skills];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute top-4 right-4 pt-32 pr-42 pl-48">
        <a href="mailto:jivturdev@gmail.com" className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl">jivturdev@gmail.com</a>
      </div>

      <div className='py-24'>
        <h1 className="text-6xl font-bold underline italic">GET IN TOUCH</h1>
        <p className="text-lg">Connect with me on LinkedIn!</p>
      </div>

      {/* Rotating skills strip */}
      <div className="overflow-hidden w-full border-t-4 border-b-4 border-black animate-marquee">
        <div className="whitespace-nowrap marquee-content">
          {duplicatedSkills.map((skill, index) => (
            <span key={index} className="mx-8 xl:mx-16">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <FiArrowUp className="text-8xl cursor-pointer" onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default ContactSection;
