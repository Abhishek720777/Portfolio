import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text) => {
      if (!text) return;
      gsap.fromTo(text,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 50 },
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full pt-28 md:pt-32 pb-12 md:pb-16 px-6 bg-[#010203]">
      <div className="w-full max-w-3xl mx-auto">

        <h2
          ref={el => textRefs.current[0] = el}
          className="font-outfit text-[#555555] text-xs tracking-[0.5em] font-medium uppercase mb-12"
        >
          About Me
        </h2>

        <p
          ref={el => textRefs.current[1] = el}
          className="font-syne text-2xl md:text-4xl text-white leading-snug font-bold mb-8"
        >
          I'm a fresher Currently working on full stack projects that help me improve my understanding of scalable applications, backend logic, and interactive frontend development.
        </p>

        <p
          ref={el => textRefs.current[2] = el}
          className="font-outfit text-[#999999] text-base md:text-lg leading-relaxed font-light mb-6"
        >
          Most of my work revolves around Java, Spring Boot, and MERN Stack. Currently open to full-time roles.
        </p>

      </div>
    </section>
  );
};

export default About;
