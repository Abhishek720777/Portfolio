import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenisRef.current.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    lenisRef.current.stop();

    return () => {
      if (lenisRef.current) lenisRef.current.destroy();
      gsap.ticker.remove(lenisRef.current?.raf);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      if (lenisRef.current) lenisRef.current.start();
      
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 100); 
    }
  }, [loading]);

  return (
    <div className="relative w-full bg-[#020508] text-white font-space min-h-screen">
      <Loader onComplete={() => setLoading(false)} />
      
      {!loading && <Navbar />}


      <div className="w-full">
        <main className="w-full flex flex-col">
          <Hero loaded={!loading} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
