import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="relative w-full py-32 flex flex-col justify-center items-center px-6 bg-[#020508]"
    >
      <div className="w-full max-w-2xl flex flex-col items-center text-center">

        <h2 className="font-outfit text-[#c8ff00] text-xs tracking-[0.5em] font-medium uppercase mb-4">
          Contact
        </h2>

        <h3 className="font-syne text-3xl md:text-4xl text-white font-bold mb-4 tracking-tight">
          Let's connect.
        </h3>
        
        <p className="font-outfit text-[#777777] text-sm md:text-base font-light mb-10 max-w-md leading-relaxed">
          Open to opportunities, internships, or just a good conversation about tech.
        </p>

        <a 
          href="mailto:abhishekpoojary720@gmail.com"
          className="font-outfit text-sm tracking-wide text-white border border-[rgba(255,255,255,0.2)] rounded-full px-8 py-3 hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300 mb-12"
        >
          abhishekpoojary720@gmail.com
        </a>

        <div className="flex gap-5">
          <a 
            href="https://github.com/Abhishek720777" 
            target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#888888] hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <FaGithub size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/abhishek-poojary777" 
            target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#888888] hover:text-[#c8ff00] hover:border-[rgba(200,255,0,0.3)] transition-all duration-300"
          >
            <FaLinkedin size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
