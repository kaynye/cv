import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom Cursor Logic
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
        });
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseout', hideCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseout', hideCursor);
    };
  }, []);

  useEffect(() => {
    // Global Entrance Animations
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((elem) => {
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-primary selection:text-black">
      <div ref={cursorRef} className="custom-cursor hidden md:block" />

      {/* Background AI Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 pt-24">
        <Hero />
        <Specialties />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-12 text-center text-white/40 text-sm font-space uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Kany Dev — Built with React & AI
      </footer>
    </div>
  );
};

export default App;
