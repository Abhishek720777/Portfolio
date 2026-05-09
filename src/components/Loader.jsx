import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const topHalfRef = useRef(null);
  const bottomHalfRef = useRef(null);
  const dotRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const percentRef = useRef(null);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const counter = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        if (onCompleteRef.current) onCompleteRef.current();
      }
    });


    tl.to(dotRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    })


    .to(dotRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in"
    })
    .set(dotRef.current, { display: "none" })
    .fromTo(trackRef.current,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.5, ease: "power3.out" }
    )
    .set(percentRef.current, { opacity: 1 }, "<0.2")


    .add("fill")
    .to(fillRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power1.inOut"
    }, "fill")
    .to(counter, {
      val: 100,
      duration: 1.8,
      ease: "power1.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.textContent = Math.round(counter.val) + "%";
        }
      }
    }, "fill")


    .to([trackRef.current, percentRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    })


    .to(topHalfRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    }, ">")
    .to(bottomHalfRef.current, {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.inOut",
    }, "<")


    .set(containerRef.current, { display: "none" });

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">


      <div
        ref={topHalfRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-black pointer-events-auto"
      />


      <div
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black pointer-events-auto"
      />


      <div
        ref={dotRef}
        className="relative z-10 w-3 h-3 bg-white rounded-full opacity-0 scale-0"
      />


      <div
        ref={trackRef}
        className="absolute z-10 overflow-hidden rounded-full opacity-0"
        style={{ width: '280px', height: '3px', backgroundColor: 'rgba(255,255,255,0.1)', transformOrigin: 'center' }}
      >
        <div
          ref={fillRef}
          className="h-full rounded-full"
          style={{ width: '0%', backgroundColor: '#ffffff' }}
        />
      </div>


      <div
        ref={percentRef}
        className="absolute z-10 font-space text-white text-xs tracking-[0.3em] opacity-0"
        style={{ marginTop: '36px' }}
      >
        0%
      </div>

    </div>
  );
};

export default Loader;
