import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiJest 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact size={22} /> },
      { name: "JavaScript", icon: <SiJavascript size={22} /> },
      { name: "HTML5", icon: <FaHtml5 size={22} /> },
      { name: "CSS3", icon: <FaCss3Alt size={22} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={22} /> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={22} /> },
      { name: "Express.js", icon: <SiExpress size={22} /> },
      { name: "Java", icon: <FaJava size={22} /> },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={22} /> },
      { name: "MySQL", icon: <SiMysql size={22} /> },
      { name: "Firebase", icon: <SiFirebase size={22} /> },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: <FaAws size={22} /> },
      { name: "Docker", icon: <FaDocker size={22} /> },
      { name: "Git", icon: <FaGitAlt size={22} /> },
      { name: "Jest", icon: <SiJest size={22} /> },
    ]
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          delay: i * 0.15
        }
      );
    });


    const items = sectionRef.current.querySelectorAll('.skill-item');
    items.forEach((item, i) => {
      gsap.fromTo(item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
          delay: 0.3 + i * 0.05
        }
      );
    });
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="relative w-full bg-[#010203] overflow-hidden pt-12 md:pt-16 pb-28 md:pb-36 px-6 md:px-[8vw]"
    >

      <div className="mb-16 md:mb-20">
        <h2 className="font-outfit text-[#c8ff00] text-xs tracking-[0.5em] font-medium uppercase mb-4">
          Skills
        </h2>
        <h3 className="font-bebas text-4xl md:text-6xl text-white tracking-wider leading-tight">
          Tech Arsenal
        </h3>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, catIdx) => (
          <div
            key={catIdx}
            ref={el => cardsRef.current[catIdx] = el}
            className="group rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-6 md:p-8 hover:border-[rgba(200,255,0,0.15)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-500"
          >

            <h4 className="font-outfit text-sm text-[#888888] font-semibold tracking-widest uppercase mb-6 pb-4 border-b border-[rgba(255,255,255,0.06)]">
              {category.title}
            </h4>


            <div className="flex flex-col gap-4">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="skill-item flex items-center gap-4 group/item cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#666666] group-hover/item:text-[#c8ff00] group-hover/item:bg-[rgba(200,255,0,0.05)] group-hover/item:border-[rgba(200,255,0,0.15)] transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-outfit text-[#aaaaaa] text-sm md:text-base font-normal group-hover/item:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
