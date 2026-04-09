import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: "AI Agent Orchestrator",
            category: "Custom AI",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            link: "/projects"
        },
        {
            title: "SEO Analytics Dashboard",
            category: "SEO Optimization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            link: "/projects"
        },
        {
            title: "E-commerce Engine",
            category: "Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            link: "/projects"
        },
        {
            title: "Neural Search App",
            category: "Custom AI",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8e?auto=format&fit=crop&q=80&w=800",
            link: "/projects"
        }
    ];

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
                    {/* Welcome Slide */}
                    <div className="h-screen w-screen flex items-center justify-center bg-black/40 px-20">
                        <div className="max-w-4xl reveal">
                            <span className="text-primary font-space tracking-[.5em] text-xs mb-8 block underline underline-offset-8">CASE STUDIES</span>
                            <h2 className="text-7xl md:text-[10rem] tracking-tighter leading-none mb-12">PROJETS <br /><span className="text-primary italic">SÉLECTIONNÉS</span></h2>
                            <p className="text-xl text-white/40 max-w-xl font-light leading-relaxed">
                                Une exploration de nos dernières transmissions Neurales. Faites défiler pour entrer dans le moteur.
                            </p>
                        </div>
                    </div>

                    {/* Project Slides */}
                    {projects.map((project, index) => (
                        <div key={index} className="h-screen w-screen flex items-center justify-center px-10 md:px-20 relative overflow-hidden group">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 scale-110 group-hover:scale-100"
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                            </div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full max-w-7xl">
                                <div className="brutal-card !p-0 aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-primary font-space tracking-widest text-sm uppercase">{project.category}</span>
                                        <h3 className="text-5xl md:text-8xl tracking-tight leading-none">{project.title}</h3>
                                    </div>
                                    <p className="text-lg text-white/60 leading-relaxed font-light">
                                        Intégration poussée de solutions IA avec une architecture SEO robuste. Un bond en avant dans le traitement neural des données.
                                    </p>
                                    <div className="flex gap-4">
                                        <Link to={project.link} className="btn-brutal !px-10 flex items-center gap-2">
                                            VOIR LE CASE STUDY <ArrowRight size={18} />
                                        </Link>
                                        <div className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors cursor-pointer text-white/40 hover:text-white">
                                            <Globe size={18} /> <span className="text-xs font-space tracking-widest uppercase">Live View</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
