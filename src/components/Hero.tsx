import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

        // Use set to ensure initial state before animation
        gsap.set([line1Ref.current, line2Ref.current], { y: 100, opacity: 0 });

        tl.to(line1Ref.current, { y: 0, opacity: 1, delay: 0.5 })
            .to(line2Ref.current, { y: 0, opacity: 1 }, '-=0.8');
    }, []);

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center py-20">
            <div className="max-w-5xl">
                <div ref={line1Ref} className="overflow-hidden">
                    <h1 className="text-6xl md:text-9xl tracking-tighter leading-[0.9] text-white">
                        DESIGNER DE <br />
                        <span className="text-primary">SOLUTIONS</span>
                    </h1>
                </div>

                <div ref={line2Ref} className="mt-8 flex flex-col md:flex-row md:items-end gap-12">
                    <p className="max-w-md text-white/60 text-lg leading-relaxed font-archivo">
                        Basé sur l'innovation, je fusionne le développement de pointe,
                        l'optimisation SEO de haut niveau et l'intégration d'IA personnalisée
                        pour créer des expériences numériques uniques.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 glass text-xs uppercase font-space tracking-widest text-white/80">
                            <Code size={14} className="text-primary" /> Web Dev
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 glass text-xs uppercase font-space tracking-widest text-white/80">
                            <Globe size={14} className="text-accent" /> SEO Expert
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 glass text-xs uppercase font-space tracking-widest text-white/80">
                            <Cpu size={14} className="text-purple-400" /> Custom AI
                        </div>
                    </div>
                </div>

                <div className="mt-16 reveal">
                    <button className="btn-brutal gap-3">
                        Démarrer un projet <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute left-1/2 -bottom-20 w-[1px] h-40 bg-gradient-to-b from-primary to-transparent hidden md:block" />
        </section>
    );
};

export default Hero;
