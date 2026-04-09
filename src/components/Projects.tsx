import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "AI Agent Orchestrator",
            category: "Custom AI",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "SEO Analytics Dashboard",
            category: "SEO Optimization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "E-commerce Engine",
            category: "Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Neural Search App",
            category: "Custom AI",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8e?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ];

    return (
        <section id="portfolio" className="py-32">
            <div className="mb-20 reveal">
                <h2 className="text-4xl md:text-6xl tracking-tighter mb-6">
                    RÉALISATIONS <span className="text-primary italic">MARQUANTES</span>
                </h2>
                <div className="w-24 h-1 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <div key={index} className="reveal group relative overflow-hidden brutal-card !p-0 border-none bg-black">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block">{project.category}</span>
                            <h3 className="text-3xl text-white mb-4">{project.title}</h3>

                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <a href={project.link} className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform">
                                    <ExternalLink size={18} />
                                </a>
                                <a href="#" className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                                    <Globe size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
