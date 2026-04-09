import React from 'react';
import { Helmet } from 'react-helmet-async';
import Magnetic from '../components/Magnetic';
import { Mail, MessageSquare, MapPin, Send, ChevronDown } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <Helmet>
                <title>Démarrer un Projet | Kany Dev</title>
                <meta name="description" content="Contactez Kany Dev pour discuter de vos besoins en développement, SEO ou IA." />
            </Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <section className="reveal">
                    <h1 className="text-6xl md:text-8xl mb-12 tracking-tighter">
                        DISCUTONS DE <br />
                        <span className="text-primary italic">VOTRE FUTUR</span>
                    </h1>

                    <div className="space-y-12 mb-12">
                        <div className="flex items-start gap-6">
                            <div className="p-4 glass text-primary"><Mail size={24} /></div>
                            <div>
                                <h4 className="text-sm font-space text-text-muted uppercase tracking-widest mb-1">Email</h4>
                                <p className="text-xl text-main">hello@kanydev.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 glass text-accent"><MessageSquare size={24} /></div>
                            <div>
                                <h4 className="text-sm font-space text-text-muted uppercase tracking-widest mb-1">Réseaux</h4>
                                <div className="flex gap-4 text-xl text-main">
                                    <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                    <span className="opacity-20">/</span>
                                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 glass text-purple-400"><MapPin size={24} /></div>
                            <div>
                                <h4 className="text-sm font-space text-text-muted uppercase tracking-widest mb-1">Localisation</h4>
                                <p className="text-xl text-main">Paris, France (Full Remote)</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border-2 border-dashed border-border-subtle rounded-2xl">
                        <p className="text-text-muted text-sm italic">
                            &gt; "Toutes les demandes reçoivent une réponse sous 24h ouvrées. <br />
                            Préparez-vous à décoller."
                        </p>
                    </div>
                </section>

                <section className="reveal glass p-8 md:p-12 relative">
                    <h3 className="text-3xl mb-8 font-space">FORMULAIRE DE LANCEMENT</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="fullname" className="text-[10px] uppercase tracking-[.3em] font-space text-text-muted">Nom Complet</label>
                                <input
                                    id="fullname"
                                    type="text"
                                    className="w-full bg-surface border border-border-subtle p-4 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors text-main"
                                    placeholder="Kany D."
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] uppercase tracking-[.3em] font-space text-text-muted">Email Professionnel</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full bg-surface border border-border-subtle p-4 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors text-main"
                                    placeholder="contact@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="project-type" className="text-[10px] uppercase tracking-[.3em] font-space text-text-muted">Type de Projet</label>
                            <div className="relative">
                                <select
                                    id="project-type"
                                    className="w-full bg-surface border border-border-subtle p-4 pr-10 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors appearance-none text-main"
                                >
                                    <option>SEO Strategy & Audit</option>
                                    <option>Custom AI Integration</option>
                                    <option>High-End Web Development</option>
                                    <option>Full Suite (The Works)</option>
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[10px] uppercase tracking-[.3em] font-space text-text-muted">Votre Message</label>
                            <textarea
                                id="message"
                                className="w-full bg-surface border border-border-subtle p-4 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors h-40 text-main"
                                placeholder="Racontez-moi votre vision..."
                            ></textarea>
                        </div>

                        <Magnetic>
                            <button
                                type="submit"
                                className="w-full btn-brutal flex items-center justify-center gap-2 text-lg py-4"
                            >
                                Envoyer le Message <Send size={20} />
                            </button>
                        </Magnetic>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
