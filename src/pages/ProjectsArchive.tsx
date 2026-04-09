import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, ArrowUpRight } from 'lucide-react';

const ProjectsArchive: React.FC = () => {
    const projects = [
        {
            title: "AI Agent Orchestrator",
            category: "Custom AI",
            year: "2024",
            tags: ["React", "Python", "OpenAI"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "SEO Analytics Dashboard",
            category: "SEO Optimization",
            year: "2023",
            tags: ["Next.js", "PostgreSQL", "Tailwind"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "E-commerce Engine",
            category: "Development",
            year: "2024",
            tags: ["Shopify", "React", "Node.js"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Neural Search App",
            category: "Custom AI",
            year: "2024",
            tags: ["Python", "ElasticSearch", "AI"],
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Web3 Wallet Connect",
            category: "Web3",
            year: "2023",
            tags: ["Ethers.js", "Solidty", "React"],
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Fintech CRM",
            category: "SaaS",
            year: "2024",
            tags: ["React", "NestJS", "Tailwind"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="py-20">
            <Helmet>
                <title>Projets | Kany Dev</title>
                <meta name="description" content="Archive complète des projets réalisés par Kany Dev." />
            </Helmet>

            <section className="mb-24 reveal">
                <span className="text-primary font-space tracking-[.5em] text-xs mb-4 block underline underline-offset-8">PROJECT ARCHIVE 2024</span>
                <h1 className="text-6xl md:text-9xl tracking-tighter leading-none mb-12 text-main">PORTFOLIO <br /><span className="text-primary italic">SÉLECTIONNÉ</span></h1>
                <div className="flex gap-4">
                    <span className="px-4 py-1 border border-border-subtle rounded-full text-xs uppercase tracking-widest text-text-muted">All Work (06)</span>
                    <span className="px-4 py-1 border border-border-subtle rounded-full text-xs uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer">AI Labs</span>
                    <span className="px-4 py-1 border border-border-subtle rounded-full text-xs uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer">Web Dev</span>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div key={i} className="reveal group bg-surface border border-border-subtle hover:border-primary/50 transition-colors duration-500 rounded-2xl overflow-hidden p-4">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <ArrowUpRight size={48} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-text-muted mb-1 block">{p.category} — {p.year}</span>
                                <h3 className="text-xl text-main group-hover:text-primary transition-colors">{p.title}</h3>
                            </div>
                            <Globe size={16} className="opacity-20 text-main" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {p.tags.map((t, j) => (
                                <span key={j} className="text-[9px] uppercase tracking-widest bg-primary/10 py-1 px-2 rounded text-primary font-bold">#{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 p-20 glass text-center">
                <h3 className="text-3xl mb-8 uppercase tracking-widest">VOUS AVEZ UN PROJET AMBITIEUX ?</h3>
                <button className="btn-brutal !px-12 !py-4">TRAVAILLONS ENSEMBLE</button>
            </div>
        </div>
    );
};

export default ProjectsArchive;
