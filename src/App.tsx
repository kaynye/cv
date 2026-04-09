import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import Scene3D from './components/Scene3D';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProjectsArchive from './pages/ProjectsArchive';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll Progress logic
    gsap.to('#scroll-progress', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });

    if (isLoading) return;

    // Small timeout to allow content to render before GSAP scans for .reveal
    const timer = setTimeout(() => {
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
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <ScrollToTop />
      <PageTransition />
      <Scene3D />
      <div
        ref={mainRef}
        className={`relative min-h-screen bg-black overflow-hidden selection:bg-primary selection:text-black ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}
      >
        <div ref={cursorRef} className="custom-cursor hidden md:block" />

        {/* Scroll Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-[1000] bg-white/5">
          <div id="scroll-progress" className="h-full bg-primary w-0 shadow-[0_0_10px_#FACC15]" />
        </div>

        {/* Background AI Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]" />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <Navbar />

        <main className="relative z-10 container mx-auto px-6 pt-24">
          <Routes>
            <Route path="/" element={<Home isReady={!isLoading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsArchive />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="relative z-10 border-t border-white/10 py-12 text-center text-white/40 text-sm font-space uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Kany Dev — Built with React & AI
        </footer>
      </div>
    </>
  );
};

export default App;
