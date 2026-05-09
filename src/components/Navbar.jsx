import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex gap-8 items-center">
        <a href="#about" className="font-space text-xs tracking-[0.2em] uppercase text-[#aaaaaa] hover:text-[#c8ff00] transition-colors">
          About
        </a>
        <a href="#projects" className="font-space text-xs tracking-[0.2em] uppercase text-[#aaaaaa] hover:text-[#c8ff00] transition-colors">
          Projects
        </a>
        <a href="#contact" className="font-space text-xs tracking-[0.2em] uppercase text-[#aaaaaa] hover:text-[#c8ff00] transition-colors">
          Contact
        </a>
        <a href="/resume.pdf" download="Abhishek_Poojary_Resume.pdf" target="_blank" rel="noreferrer" className="font-space text-xs tracking-[0.2em] uppercase text-[#aaaaaa] hover:text-[#c8ff00] transition-colors">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
