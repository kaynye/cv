import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import { gsap } from 'gsap';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

interface HeroProps {
    isReady?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isReady }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isReady) return;

        // Skip animation when reduced motion is preferred — just show content
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
            return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } });

        // Split text for animation
        const titleText = titleRef.current?.innerText || "";
        if (titleRef.current) {
            titleRef.current.innerHTML = titleText
                .split(" ")
                .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
                .join(" ");
        }

        const lines = titleRef.current?.querySelectorAll("span > span");

        if (lines) {
            gsap.set(contentRef.current, { opacity: 0, y: 30 });

            tl.to(lines, {
                y: 0,
                stagger: 0.1,
                delay: 0.2,
                duration: 1.2
            })
                .to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1
                }, "-=0.6");
        }
    }, [isReady]);

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center py-20 relative">
            <div className="max-w-6xl">
                <div className="w-16 h-1 bg-primary mb-8" />
                <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-7xl xl:text-[8rem] font-space font-black tracking-tighter leading-[0.88] mb-12 text-main uppercase overflow-hidden">
                    Kany Dev
                </h1>

                <div ref={contentRef} className="flex flex-col md:flex-row items-start md:items-end gap-12">
                    <div className="max-w-md">
                        <p className="text-xl text-muted leading-tight mb-8 font-archivo uppercase">
                            Expert en ingénierie <span className="text-primary italic">Web</span>.
                            Development d'applications, optimisation du SEO et des performances.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="flex items-center gap-2 px-4 py-2 glass text-[10px] uppercase tracking-[0.2em] font-space text-muted hover:text-primary transition-colors cursor-default">
                                <Code size={12} /> Web Development
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 glass text-[10px] uppercase tracking-[0.2em] font-space text-muted hover:text-primary transition-colors cursor-default">
                                <Globe size={12} /> SEO Strategy
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 glass text-[10px] uppercase tracking-[0.2em] font-space text-muted hover:text-primary transition-colors cursor-default">
                                <Cpu size={12} /> AI Integration
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 glass text-[10px] uppercase tracking-[0.2em] font-space text-muted hover:text-primary transition-colors cursor-default">
                                <Cpu size={12} /> + d'autres
                            </span>
                        </div>
                    </div>

                    <div className="md:ml-auto">
                        <Magnetic>
                            <Link to="/contact" className="btn-brutal !px-12 !py-6 text-lg group inline-flex items-center">
                                LANCER UN PROJET
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* Vertical Indicator */}
            <div className="absolute right-0 bottom-0 flex flex-col items-center gap-4 reveal">
                <span className="text-[10px] vertical-text font-space tracking-widest text-muted uppercase opacity-40">SCROLL TO ANALYZE</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
