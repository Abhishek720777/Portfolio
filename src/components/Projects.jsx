import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    name: "SkillPilot",
    tagline: "A platform for real-time coding battles and adaptive assessments.",
    tech: ["React", "Node", "Docker", "AWS", "Socket.io", "Jest"],
    details: [
      "Engineered a Secure Remote Code Execution Engine using Docker-based sandboxing with 256MB memory caps and network restrictions.",
      "Achieved 83.7% code coverage on the core execution engine through Jest and Supertest integration testing.",
      "Deployed on AWS EC2 with PM2 for zero-downtime process management and Nginx as a reverse proxy."
    ],
    liveUrl: "https://skill-pilot-liart.vercel.app/",
    repoUrl: "https://github.com/Abhishek720777/SkillPilot"
  },
  {
    id: 2,
    name: "WebhookHub",
    tagline: "A developer tool to intercept, debug, and tunnel cloud webhooks locally.",
    tech: ["React", "Spring Boot", "WebSocket", "STOMP", "NPM CLI"],
    details: [
      "Published a global CLI tool to NPM Registry with JWT-based authentication for secure local config management.",
      "Architected a low-latency bridge using STOMP over WebSockets for sub-second webhook forwarding behind NAT/Firewalls.",
      "Built an Event Replay tool for re-triggering failed webhooks and a live analytics dashboard."
    ],
    liveUrl: "https://web-hook-hub-ld3z.vercel.app/",
    repoUrl: "https://github.com/Abhishek720777/WebHookHub"
  },
  {
    id: 3,
    name: "AI Resume Analyzer",
    tagline: "Client-side resume analysis powered by a local LLM.",
    tech: ["React", "PDF.js", "HuggingFace", "Llama-3.1"],
    details: [
      "Built a client-side resume parser using PDF.js for text extraction from PDF uploads.",
      "Integrated a local Llama-3.1 model to generate structured feedback on resume clarity, formatting, and improvement points.",
      "Designed a clean UI for instant analysis and better user guidance."
    ],
    liveUrl: "https://abhi-airesume.netlify.app/",
    repoUrl: "https://github.com/Abhishek720777/Ai--resume-analyzer"
  }
];

const ProjectCard = ({ project, innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="col-start-1 row-start-1 w-[90%] max-w-[800px] h-auto will-change-transform"
      style={{ perspective: '1200px' }}
    >
      <div className="flip-card-inner relative w-full transition-transform duration-700 ease-in-out" style={{ transformStyle: 'preserve-3d' }}>

        <div
          className="flip-card-front w-full p-8 md:p-12 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.08)] bg-[#03060a] backdrop-blur-xl rounded-[2rem]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <h3 className="font-syne text-3xl md:text-5xl text-white font-extrabold mb-3 tracking-tight">
              {project.name}
            </h3>
            <p className="font-outfit text-[#aaaaaa] text-sm md:text-base leading-relaxed mb-8">
              {project.tagline}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-[rgba(200,255,0,0.12)] bg-[rgba(200,255,0,0.04)] text-[#c8ff00] font-space text-xs md:text-sm">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-outfit text-[#555555] text-xs tracking-widest uppercase">Hover to see details →</p>
          </div>
        </div>

        {/* === BACK FACE === */}
        <div
          className="flip-card-back absolute inset-0 w-full p-8 md:p-10 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[rgba(200,255,0,0.1)] bg-[#03060a] backdrop-blur-xl rounded-[2rem] overflow-y-auto no-scrollbar"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h4 className="font-syne text-xl md:text-2xl text-white font-bold mb-5 tracking-tight">
              {project.name}
            </h4>
            <ul className="flex flex-col gap-3 mb-6">
              {project.details.map((point, i) => (
                <li key={i} className="font-outfit text-[#bbbbbb] text-xs md:text-sm leading-relaxed pl-4 border-l-2 border-[rgba(200,255,0,0.2)]">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#c8ff00] text-black font-outfit text-xs md:text-sm font-semibold tracking-wide hover:brightness-110 transition-all duration-300"
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.15)] text-white font-outfit text-xs md:text-sm font-medium tracking-wide hover:border-[rgba(200,255,0,0.3)] hover:text-[#c8ff00] transition-all duration-300"
            >
              <FaGithub size={14} />
              Source
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const params = { angle: 0 };

    const updateCards = () => {
      const screenWidth = window.innerWidth;
      const radius = Math.min(600, screenWidth * 0.35);
      const zRadius = 300;
      const perspective = 1000;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const cardAngle = ((i + 1) * 90) + params.angle;

        if (cardAngle < -180) {
          card.style.opacity = 0;
          card.style.pointerEvents = 'none';
          return;
        }

        const rad = cardAngle * (Math.PI / 180);

        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad) * zRadius;

        let scale = Math.max(0.5, Math.min(1.0, (perspective + z) / (perspective + zRadius)));

        card.style.transform = `translateX(${x}px) scale(${scale})`;
        card.style.zIndex = Math.round(z);

        const baseOpacity = (z + zRadius) / (zRadius * 2);
        card.style.opacity = Math.max(0.2, Math.min(1, baseOpacity + 0.2));
        card.style.pointerEvents = 'auto';

        const isCentered = Math.abs(cardAngle) < 10;
        if (isCentered) {
          card.classList.add('flippable');
        } else {
          card.classList.remove('flippable');
        }
      });
    };

    updateCards();
    window.addEventListener('resize', updateCards);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });

      tl.to(params, { angle: -90, duration: 1, ease: "power1.inOut", onUpdate: updateCards }, "step1");
      tl.to({}, { duration: 0.4 });

      tl.to(params, { angle: -180, duration: 1, ease: "power1.inOut", onUpdate: updateCards }, "step2");
      tl.to({}, { duration: 0.4 });

      tl.to(params, { angle: -270, duration: 1, ease: "power1.inOut", onUpdate: updateCards }, "step3");
      tl.to({}, { duration: 0.3 });

    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', updateCards);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative z-10">
      <section
        id="projects"
        ref={sectionRef}
        className="relative w-full h-screen bg-[#010203] overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="absolute top-12 left-12 z-20 pointer-events-none">
          <h2 className="font-syne text-[#c8ff00] text-sm tracking-[0.4em] font-bold uppercase">
            Projects
          </h2>
        </div>

        <div className="w-full max-w-4xl h-[600px] grid grid-cols-1 grid-rows-1 place-items-center perspective-none">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              innerRef={el => cardsRef.current[i] = el}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
