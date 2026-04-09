import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SearchCode, Cpu, Code2, Zap } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            icon: <Code2 size={40} />,
            title: "Web Architecture",
            description: "Développement d'applications ultra-rapides avec React, Next.js et TypeScript. Focus sur la performance pure et l'expérience utilisateur.",
            features: ["Clean Architecture", "Performance Maximale", "SEO-Friendly"]
        },
        {
            icon: <SearchCode size={40} />,
            title: "SEO Mastery",
            description: "Audit technique profond, structure sémantique avancée et stratégie de contenu axée sur les intentions de recherche.",
            features: ["Audit Technique", "Core Web Vitals", "Analyse Sémantique"]
        },
        {
            icon: <Cpu size={40} />,
            title: "AI Integration",
            description: "Intégration d'agents intelligents et d'automatisations LLM pour transformer vos processus métiers.",
            features: ["Agents Autonomes", "RAG & LangChain", "Prompt Engineering"]
        }
    ];

    return (
        <div className="py-20">
            <Helmet>
                <title>Services | Kany Dev</title>
                <meta name="description" content="Solutions Web, SEO et IA pour propulser votre business au niveau supérieur." />
            </Helmet>
            <section className="mb-32 reveal">
                <h1 className="text-6xl md:text-8xl mb-8 tracking-tighter">
                    NOS <span className="text-accent italic">SUPER-POUVOIRS</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted leading-relaxed font-archivo">
                    Nous ne nous contentons pas de construire des sites. Nous forgeons des outils
                    de croissance propulsés par les dernières avancées technologiques.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {services.map((s, i) => (
                    <div key={i} className="reveal glass p-8 flex flex-col items-start hover:border-white/40 transition-all duration-300">
                        <div className="text-primary mb-6">{s.icon}</div>
                        <h3 className="text-3xl mb-4 font-space">{s.title}</h3>
                        <p className="text-muted mb-8 leading-relaxed">{s.description}</p>
                        <ul className="space-y-3 mt-auto">
                            {s.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-2 text-xs uppercase tracking-widest text-main">
                                    <Zap size={12} className="text-primary" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <section className="reveal glass p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-purple-500" />
                <h2 className="text-4xl md:text-6xl mb-8 tracking-tighter">PRÊT À <span className="text-primary">DOMINER</span> LE MARCHÉ ?</h2>
                <p className="max-w-xl mx-auto text-lg text-white/60 mb-12">
                    Chaque seconde de retard est une opportunité pour vos concurrents.
                    Accélérez maintenant.
                </p>
                <button className="btn-brutal text-lg px-12 py-6">
                    LANCER L'AUDIT GRATUIT
                </button>
            </section>
        </div>
    );
};

export default Services;
