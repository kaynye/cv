import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, Cpu, Code2, Globe, Zap, Database } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 md:py-24 px-6 overflow-hidden">
            <Helmet>
                <title>Architecture & Vision | Kany Dev</title>
                <meta name="description" content="Découvrez le parcours et l'expertise technique de Kany Dev en développement et IA." />
            </Helmet>

            {/* --- HERO SECTION --- */}
            <section className="relative mb-24 md:mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 reveal">
                        <div className="inline-block px-4 py-1 mb-6 border-2 border-primary bg-primary/10 text-primary font-mono text-xs font-black tracking-widest uppercase">
                            Status: Neural Architect // Established 2024
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 font-space font-black tracking-tighter leading-[0.85] uppercase text-main">
                            L'ESPRIT <br />
                            <span className="text-primary italic">ANTIGRAVITÉ</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-main leading-relaxed font-archivo max-w-2xl opacity-90">
                            Je suis <span className="text-primary font-black">Kany Dev</span>, architecte de solutions numériques opérant à la convergence du développement web haute-performance et de l'intelligence artificielle.
                        </p>
                    </div>

                    <div className="lg:col-span-5 relative reveal">
                        {/* Brutalist Frame for Portrait */}
                        <div className="relative z-10 p-2 border-4 border-text-main shadow-[20px_20px_0px_var(--app-primary)] bg-bg-main transform lg:rotate-2">
                            <img
                                src="/portrait.png"
                                alt="Kany Dev Neural Architect"
                                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                            />
                            {/* Decorative Technical Overlays */}
                            <div className="absolute top-4 right-4 bg-black/80 text-primary px-3 py-1 font-mono text-[10px] backdrop-blur-md border border-primary/30">
                                ID: KANY_V5.1
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-dashed border-text-main/20 -z-10 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* --- CORE PHILOSOPHY --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 md:mb-48">
                <div className="reveal group">
                    <div className="relative h-full p-10 border-2 border-text-main bg-bg-main/50 backdrop-blur-xl shadow-[8px_8px_0px_var(--app-text-main)] transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[16px_16px_0px_var(--app-accent)]">
                        <Target className="text-primary mb-8" size={48} strokeWidth={2.5} />
                        <h3 className="text-4xl font-space font-extrabold mb-6 uppercase tracking-tight text-main">MA MISSION</h3>
                        <p className="text-lg text-main leading-relaxed font-archivo opacity-80">
                            Propulser les marques vers des sommets de performance inatteignables via les méthodes conventionnelles. Je construis des interfaces qui ne se contentent pas d'exister, mais qui dominent leur segment.
                        </p>
                    </div>
                </div>

                <div className="reveal group">
                    <div className="relative h-full p-10 border-2 border-text-main bg-bg-main/50 backdrop-blur-xl shadow-[8px_8px_0px_var(--app-text-main)] transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[16px_16px_0px_var(--app-purple)]">
                        <Shield className="text-accent mb-8" size={48} strokeWidth={2.5} />
                        <h3 className="text-4xl font-space font-extrabold mb-6 uppercase tracking-tight text-main">PHILO</h3>
                        <p className="text-lg text-main leading-relaxed font-archivo opacity-80">
                            Minimalisme radical, rapidité chirurgicale et transparence totale. Chaque ligne de code est une décision stratégique visant à maximiser le ROI et la pérennité technique.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- TECHNICAL DASHBOARD --- */}
            <section
                style={{ backgroundColor: 'var(--app-bg-main)', color: 'var(--app-text-main)', borderColor: 'var(--app-text-main)' }}
                className="reveal mb-32 md:mb-48 p-12 border-4 relative shadow-[16px_16px_0px_var(--app-text-main)] transition-colors duration-500"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-5xl font-space font-black tracking-tighter uppercase mb-2">Technological Stacks</h2>
                        <p className="font-mono text-sm text-primary uppercase tracking-[0.3em]">Core Competencies // Decrypted Output</p>
                    </div>
                    <div className="flex gap-4">
                        <div style={{ backgroundColor: 'var(--app-bg-surface)' }} className="p-3 border-2 border-text-main transition-colors duration-500"><Cpu size={20} /></div>
                        <div style={{ backgroundColor: 'var(--app-bg-surface)' }} className="p-3 border-2 border-text-main transition-colors duration-500"><Code2 size={20} /></div>
                        <div style={{ backgroundColor: 'var(--app-bg-surface)' }} className="p-3 border-2 border-text-main transition-colors duration-500"><Globe size={20} /></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Skill 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Zap size={24} className="text-primary" />
                            <span className="font-space font-black uppercase tracking-widest text-sm">FullStack Development</span>
                        </div>
                        <div className="relative h-4 bg-text-main/10 border border-text-main/20">
                            <div className="h-full bg-primary w-[98%] relative overflow-hidden text-main">
                                <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                            </div>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest">
                            <div className="flex flex-col gap-2 opacity-70">
                                <span>ReactJS / React Native / Next / TS</span>
                                <span>Python / Django / Flask</span>
                                <span>PostgreSQL / MongoDB</span>
                                <span>Docker / Kubernetes</span>
                            </div>
                            <span className="font-black text-primary text-xs">98%</span>
                        </div>
                    </div>

                    {/* Skill 2 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <SearchCode size={24} className="text-accent" />
                            <span className="font-space font-black uppercase tracking-widest text-sm">Referencement</span>
                        </div>
                        <div className="relative h-4 bg-text-main/10 border border-text-main/20">
                            <div className="h-full bg-accent w-[95%] relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                            </div>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest">
                            <div className="flex flex-col gap-2 opacity-70">
                                <span>Recherche de mots clés</span>
                                <span>Optimisation des performances / User Experience</span>
                                <span>Stratégie de contenu / Netlinking</span>
                                <span></span>
                            </div>
                            <span className="font-black text-accent text-xs">95%</span>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Database size={24} className="text-purple-500" />
                            <span className="font-space font-black uppercase tracking-widest text-sm">AI Integrations</span>
                        </div>
                        <div className="relative h-4 bg-text-main/10 border border-text-main/20">
                            <div className="h-full bg-purple-500 w-[92%] relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                            </div>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest">
                            <span className="opacity-70">LLMs / Automations</span>
                            <span className="font-black text-purple-500 text-xs">92%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER QUOTE --- */}
            <div className="reveal text-center relative py-12">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                    <span className="text-9xl font-black font-space whitespace-nowrap">ANTI-GRAVITY</span>
                </div>
                <p className="text-main/40 font-mono text-xs md:text-sm tracking-widest uppercase italic max-w-xl mx-auto leading-loose relative z-10">
                    &gt; "Le futur n'est pas une destination, c'est un flux de données que nous apprenons à diriger. Codez radical."
                </p>
                <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-[0.4em] text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    System Active // All Systems Go
                </div>
            </div>
        </div>
    );
};

// Internal sub-component for consistency
const SearchCode: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
    <div className={className}>
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 9 5 12" />
            <circle cx="11" cy="9" r="6" />
            <path d="m14 14 5 5" />
        </svg>
    </div>
);

export default About;
