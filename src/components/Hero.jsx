import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const Hero = ({ loaded }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const hasPlayed = useRef(false);


  const block1Ref = useRef(null);
  const text1Ref = useRef(null);
  const block2Ref = useRef(null);
  const text2Ref = useRef(null);
  const block3Ref = useRef(null);
  const text3Ref = useRef(null);


  const lineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);


  useEffect(() => {
    gsap.to(contentRef.current, {
      y: 120, opacity: 0, ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  useEffect(() => {
    if (!loaded || hasPlayed.current) return;
    hasPlayed.current = true;

    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], { visibility: 'hidden' });
    gsap.set([block1Ref.current, block2Ref.current, block3Ref.current], { scaleX: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set([descRef.current, ctaRef.current], { opacity: 0, y: 15 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(block1Ref.current, {
      scaleX: 1, duration: 0.3, ease: 'power3.inOut',
      onStart: () => { block1Ref.current.style.transformOrigin = '0% 50%'; }
    })
      .set(text1Ref.current, { visibility: 'visible' })
      .to(block1Ref.current, {
        scaleX: 0, duration: 0.25, ease: 'power3.inOut',
        onStart: () => { block1Ref.current.style.transformOrigin = '100% 50%'; }
      });

    tl.to(block2Ref.current, {
      scaleX: 1, duration: 0.35, ease: 'power3.inOut',
      onStart: () => { block2Ref.current.style.transformOrigin = '0% 50%'; }
    }, '-=0.15')
      .set(text2Ref.current, { visibility: 'visible' })
      .to(block2Ref.current, {
        scaleX: 0, duration: 0.3, ease: 'power3.inOut',
        onStart: () => { block2Ref.current.style.transformOrigin = '100% 50%'; }
      });


    tl.to(block3Ref.current, {
      scaleX: 1, duration: 0.35, ease: 'power3.inOut',
      onStart: () => { block3Ref.current.style.transformOrigin = '0% 50%'; }
    }, '-=0.15')
      .set(text3Ref.current, { visibility: 'visible' })
      .to(block3Ref.current, {
        scaleX: 0, duration: 0.3, ease: 'power3.inOut',
        onStart: () => { block3Ref.current.style.transformOrigin = '100% 50%'; }
      });

    tl.to(lineRef.current, { scaleX: 1, duration: 0.6, ease: 'power4.inOut' }, '-=0.2');
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2');

  }, [loaded]);

  return (
    <section id="hero" ref={sectionRef} className="relative w-full h-screen bg-[#020508] overflow-hidden">

      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }}
      ></div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <svg className="absolute top-[20%] right-[15%] w-10 h-10 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <svg className="absolute bottom-[25%] left-[10%] w-8 h-8 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <div className="absolute top-[35%] right-[20%] w-80 h-80 border border-[rgba(255,255,255,0.08)] rounded-full"></div>
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-[#888888] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-transparent border border-[#888888] rounded-full"></div>
      </div>

      <div ref={contentRef} className="relative z-10 w-full h-full max-w-[1200px] mx-auto px-8 md:px-16 flex flex-col justify-center pt-24">

        <div className="mb-3 relative inline-block overflow-hidden self-start">
          <span ref={text1Ref} className="font-syne text-lg md:text-xl tracking-wide text-white font-semibold block py-1 px-1" style={{ visibility: 'hidden' }}>
            Hello, I'm Abhishek
          </span>
          <div ref={block1Ref} className="absolute inset-0" style={{ backgroundColor: '#ffffff', transform: 'scaleX(0)', zIndex: 2 }} />
        </div>

        <div className="mb-1 relative inline-block overflow-hidden self-start">
          <h1 ref={text2Ref} className="font-syne text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-[1.1] tracking-tight py-2 px-1" style={{ visibility: 'hidden' }}>
            Full-Stack Developer
          </h1>
          <div ref={block2Ref} className="absolute inset-0" style={{ backgroundColor: '#ffffff', transform: 'scaleX(0)', zIndex: 2 }} />
        </div>

        <div className="mb-6 relative inline-block overflow-hidden self-start">
          <h2 ref={text3Ref} className="font-syne text-2xl md:text-4xl lg:text-5xl text-[#444444] font-bold leading-[1.1] tracking-tight py-2 px-1" style={{ visibility: 'hidden' }}>
            exploring backend and interactive frontend experiences
          </h2>
          <div ref={block3Ref} className="absolute inset-0" style={{ backgroundColor: '#222222', transform: 'scaleX(0)', zIndex: 2 }} />
        </div>

        <div ref={lineRef} className="w-16 h-[2px] bg-white mb-5 origin-left" style={{ transform: 'scaleX(0)' }}></div>

        <div ref={descRef} className="mb-6 max-w-md" style={{ opacity: 0 }}>
          <p className="font-outfit text-[#777777] text-sm md:text-base leading-relaxed font-light">
            I'm just passionately curious about building web applications, sloving problems and trying out my creativity
          </p>
        </div>

        <div ref={ctaRef} className="flex items-center gap-8" style={{ opacity: 0 }}>
          <a href="#projects" className="group flex items-center gap-3 font-outfit text-sm text-white border border-[rgba(255,255,255,0.2)] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="font-outfit text-sm text-[#555555] hover:text-white transition-colors duration-300">
            Get in Touch
          </a>
        </div>

      </div>



    </section>
  );
};

export default Hero;
