import React from 'react';
import { Code2, SearchCode, Cpu } from 'lucide-react';

const Specialties: React.FC = () => {
    const specialties = [
        {
            title: "Développement",
            desc: "Création d'architectures robustes avec Web et mobile performantes et sécurisées.",
            icon: Code2,
            tags: ["Fullstack", "Clean Code", "React"]
        },
        {
            title: "Optimisation Referencement",
            desc: "Developpement d'un strategie SEO / SEA, ameliorez votre visibilité sur les moteurs de recherche.",
            icon: SearchCode,
            tags: ["Core Web Vitals", "Semantics", "Speed"]
        },
        {
            title: "Intégration d'IA",
            desc: "Intégration de LLMs et d'agents personnalisés pour booster vos workflows, commun",
            icon: Cpu,
            tags: ["LLMs", "Automation", "Agents"]
        }
    ];

    return (
        <section id="specialties" className="py-32">
            <div className="mb-20 reveal">
                <h2 className="text-4xl md:text-6xl tracking-tighter mb-6">
                    DOMAINES <span className="text-primary italic">D'EXPERTISE</span>
                </h2>
                <div className="w-24 h-1 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specialties.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <div key={i} className="reveal glass-card p-10 group">
                            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Icon className="text-primary" size={32} />
                            </div>
                            <h3 className="text-2xl mb-4 text-main font-space font-bold">{s.title}</h3>
                            <p className="text-muted font-light leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Specialties;
