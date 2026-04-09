import React from 'react';
import { Code2, SearchCode, Cpu } from 'lucide-react';

const Specialties: React.FC = () => {
    const cards = [
        {
            title: "Développement",
            desc: "Création d'architectures robustes avec React et TypeScript. Performance et scalabilité au cœur du code.",
            icon: <Code2 className="w-8 h-8" />,
            color: "bg-primary text-black",
            style: "brutal-card p-10 flex flex-col gap-6",
            tags: ["Fullstack", "Clean Code", "React"]
        },
        {
            title: "Optimisation SEO",
            desc: "Dominez les classements. Stratégies techniques pointues pour une visibilité organique maximale.",
            icon: <SearchCode className="w-8 h-8" />,
            color: "text-accent",
            style: "glass-card p-10 flex flex-col gap-6 border-accent/20",
            tags: ["Core Web Vitals", "Semantics", "Speed"]
        },
        {
            title: "Intégration d'IA",
            desc: "Automatisation et intelligence. Intégration de LLMs et d'agents personnalisés pour booster vos workflows.",
            icon: <Cpu className="w-8 h-8" />,
            color: "text-purple-400",
            style: "glass-card p-10 flex flex-col gap-6 border-purple-400/20 shadow-[0_0_50px_-12px_rgba(192,132,252,0.2)]",
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div key={index} className={`reveal ${card.style} group ring-1 ring-white/5`}>
                        {/* Background Accent for Glass Cards */}
                        {card.title !== "Développement" && (
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                        )}

                        <div className={`p-4 rounded-2xl w-fit ${card.title === "Développement" ? "bg-black text-white" : "bg-white/5 " + card.color}`}>
                            {card.icon}
                        </div>

                        <div>
                            <h3 className="text-2xl mb-4 font-space">{card.title}</h3>
                            <p className={`text-sm leading-relaxed ${card.title === "Développement" ? "text-black/70" : "text-white/60"}`}>
                                {card.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {card.tags.map(tag => (
                                <span key={tag} className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${card.title === "Développement" ? "border-black/20 text-black/60" : "border-white/10 text-white/40"}`}>
                                    # {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Specialties;
