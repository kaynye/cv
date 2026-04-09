import React from 'react';
import { Mail, Globe, Cpu } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32">
            <div className="glass overflow-hidden border-primary/20 bg-primary/[0.02]">
                <div className="p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 reveal">
                        <h2 className="text-5xl md:text-8xl tracking-tighter leading-none mb-10">
                            PRÊT À <br />
                            <span className="text-primary italic">PROPULSER</span> <br />
                            VOTRE VISION ?
                        </h2>
                        <p className="text-white/50 max-w-md text-lg font-archivo">
                            Qu'il s'agisse de code, de SEO ou d'IA, je suis là pour transformer vos défis techniques en avantages compétitifs.
                        </p>
                    </div>

                    <div className="flex-none reveal">
                        <div className="flex flex-col gap-4">
                            <a href="mailto:hello@kanydev.com" className="btn-brutal text-2xl lowercase font-archivo group">
                                hello@<span className="text-black group-hover:italic transition-all">kanydev.com</span>
                            </a>

                            <div className="flex gap-4 mt-6">
                                <a href="#" className="p-4 glass hover:bg-white/10 transition-colors"><Globe size={24} /></a>
                                <a href="#" className="p-4 glass hover:bg-white/10 transition-colors"><Cpu size={24} /></a>
                                <a href="#" className="p-4 glass hover:bg-white/10 transition-colors"><Mail size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolling Text Ribbon */}
                <div className="bg-primary py-4 overflow-hidden border-y-2 border-black">
                    <div className="whitespace-nowrap flex gap-12 animate-[scroll_20s_linear_infinite] uppercase font-space font-black text-black text-xl italic">
                        {[...Array(6)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span>React Engineering</span>
                                <span>•</span>
                                <span>SEO Dominance</span>
                                <span>•</span>
                                <span>Custom AI Agents</span>
                                <span>•</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
