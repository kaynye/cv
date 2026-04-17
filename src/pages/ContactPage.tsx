import React from 'react';
import { Helmet } from 'react-helmet-async';
import Magnetic from '../components/Magnetic';
import { Mail, MessageSquare, MapPin, Send, ChevronDown } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <Helmet>
                <title>Démarrer un Projet | Kany Dev</title>
                <meta name="description" content="Contactez Kany Dev pour discuter de vos besoins en développement, SEO ou IA." />
            </Helmet>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <section className="reveal">
                    <h1 className="text-6xl md:text-7xl mb-8 font-space font-black tracking-tighter leading-none uppercase text-main">
                        DISCUTONS DE <br />
                        <span className="text-primary italic">VOTRE FUTUR</span>
                    </h1>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 border-2 border-text-main bg-primary text-black transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[4px_4px_0px_var(--app-text-main)]">
                                <Mail size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xs font-mono font-black text-primary uppercase tracking-[0.3em] mb-1">EMAIL</h4>
                                <p className="text-xl font-space font-bold text-main">hello@kanydev.ai</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 border-2 border-text-main bg-accent text-black transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[4px_4px_0px_var(--app-text-main)]">
                                <MessageSquare size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xs font-mono font-black text-accent uppercase tracking-[0.3em] mb-1">NETWORK</h4>
                                <div className="flex gap-4 text-xl font-space font-bold text-main">
                                    <a href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">LinkedIn</a>
                                    <a href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">Twitter</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 border-2 border-text-main bg-purple-600 text-white transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[4px_4px_0px_var(--app-text-main)]">
                                <MapPin size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xs font-mono font-black text-purple-600 uppercase tracking-[0.3em] mb-1">LOCATION</h4>
                                <p className="text-xl font-space font-bold text-main">Paris, France [Remote]</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-2 border-dashed border-text-main/30 bg-text-main/5 text-main">
                        <p className="font-mono text-[10px] leading-relaxed uppercase tracking-wider">
                            <span className="text-primary font-bold">&gt; INFO:</span> "Traitement sous 24h. Préparez-vous à une optimisation radicale."
                        </p>
                    </div>
                </section>

                <section className="reveal relative">
                    <div
                        className="p-8 border-2 border-text-main shadow-[8px_8px_0px_var(--app-text-main)]"
                        style={{ backgroundColor: 'var(--app-bg-main)', color: 'var(--app-text-main)' }}
                    >
                        <div className="mb-8 pb-4 border-b-2 border-text-main/10 flex justify-between items-end">
                            <h3 className="text-xl font-space font-black tracking-tight uppercase">Lancement de Projet</h3>
                            <span className="text-[9px] font-mono opacity-30 uppercase tracking-widest">v5.1</span>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullname" className="text-[10px] font-mono font-black uppercase tracking-[.3em]">NOM COMPLET</label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        className="w-full bg-main/5 border-2 border-text-main p-3.5 focus:outline-hidden focus:bg-primary/10 transition-colors font-space text-base font-bold placeholder:text-main/40 text-main"
                                        placeholder="Kany D."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-mono font-black uppercase tracking-[.3em]">EMAIL PRO</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full bg-main/5 border-2 border-text-main p-3.5 focus:outline-hidden focus:bg-primary/10 transition-colors font-space text-base font-bold placeholder:text-main/40 text-main"
                                        placeholder="hello@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="project-type" className="text-[10px] font-mono font-black uppercase tracking-[.3em]">TYPE DE PROJET</label>
                                <div className="relative">
                                    <select
                                        id="project-type"
                                        className="w-full bg-main/5 border-2 border-text-main p-3.5 pr-10 focus:outline-hidden focus:bg-primary/10 transition-colors appearance-none font-space text-base font-bold text-main"
                                    >
                                        <option>SEO Strategy & Audit</option>
                                        <option>Custom AI Integration</option>
                                        <option>High-End Web Development</option>
                                        <option>Full Suite (The Works)</option>
                                    </select>
                                    <ChevronDown
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-mono font-black uppercase tracking-[.3em]">VISION & OBJECTIFS</label>
                                <textarea
                                    id="message"
                                    className="w-full bg-main/5 border-2 border-text-main p-3.5 focus:outline-hidden focus:bg-primary/10 transition-colors h-32 font-space text-base font-bold placeholder:text-main/40 text-main"
                                    placeholder="Racontez-moi vos objectifs..."
                                ></textarea>
                            </div>

                            <Magnetic>
                                <button
                                    type="submit"
                                    className="w-full btn-brutal flex items-center justify-center gap-4 text-lg py-5 group"
                                >
                                    ENVOYER LE MESSAGE
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </Magnetic>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
