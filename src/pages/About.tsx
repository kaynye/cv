import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-20">
            <Helmet>
                <title>Expertise | Kany Dev</title>
                <meta name="description" content="Découvrez le parcours et l'expertise technique de Kany Dev en développement et IA." />
            </Helmet>
            <section className="mb-32 reveal">
                <h1 className="text-6xl md:text-8xl mb-12 tracking-tighter">
                    L'ESPRIT <br />
                    <span className="text-primary italic">ANTIGRAVITÉ</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed font-archivo">
                    Je suis **Kany Dev**, architecte de solutions numériques spécialisé dans l'intersection
                    critique du développement web, du SEO technique et de l'intelligence artificielle.
                    Mon approche refuse les conventions pour privilégier l'impact pur et l'innovation radicale.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                <div className="reveal glass p-10 border-l-4 border-primary">
                    <Target className="text-primary mb-6" size={32} />
                    <h3 className="text-2xl mb-4">MA MISSION</h3>
                    <p className="text-white/60 leading-relaxed">
                        Élever les marques vers de nouveaux sommets de performance à travers des interfaces
                        intuitives et des systèmes automatisés par l'IA.
                    </p>
                </div>
                <div className="reveal glass p-10 border-l-4 border-accent">
                    <Shield className="text-accent mb-6" size={32} />
                    <h3 className="text-2xl mb-4">MA PHILOSOPHIE</h3>
                    <p className="text-white/60 leading-relaxed">
                        Minimalisme, rapidité et transparence. Chaque ligne de code doit servir un objectif
                        de conversion clair.
                    </p>
                </div>
            </div>

            <section className="reveal mb-32">
                <h2 className="text-4xl mb-16 tracking-tight">EXPERTISE TECHNIQUE</h2>
                <div className="space-y-12">
                    <div className="group">
                        <div className="flex justify-between mb-4">
                            <span className="font-space uppercase tracking-widest text-sm">Web Development (React/TS/Next)</span>
                            <span className="text-primary">98%</span>
                        </div>
                        <div className="h-1 bg-white/10 overflow-hidden">
                            <div className="h-full bg-primary w-[98%] origin-left transition-transform duration-1000 group-hover:scale-x-110" />
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex justify-between mb-4">
                            <span className="font-space uppercase tracking-widest text-sm">SEO Technique & Sémantique</span>
                            <span className="text-accent">95%</span>
                        </div>
                        <div className="h-1 bg-white/10 overflow-hidden">
                            <div className="h-full bg-accent w-[95%] origin-left transition-transform duration-1000 group-hover:scale-x-110" />
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex justify-between mb-4">
                            <span className="font-space uppercase tracking-widest text-sm">IA Integration & Automations</span>
                            <span className="text-purple-400">92%</span>
                        </div>
                        <div className="h-1 bg-white/10 overflow-hidden">
                            <div className="h-full bg-purple-400 w-[92%] origin-left transition-transform duration-1000 group-hover:scale-x-110" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="reveal text-center">
                <p className="text-white/40 font-mono text-sm mb-8 italic">
                    &gt; "Le futur ne se prédit pas, il se code."
                </p>
            </div>
        </div>
    );
};

export default About;
