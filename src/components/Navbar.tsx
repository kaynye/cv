import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
            <div className="glass px-8 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-space font-black tracking-tighter hover:scale-105 transition-transform">
                    KANY<span className="text-primary">.DEV</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Magnetic strength={20}>
                        <Link to="/about" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Expertise</Link>
                    </Magnetic>
                    <Magnetic strength={20}>
                        <Link to="/services" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Services</Link>
                    </Magnetic>
                    <Magnetic strength={20}>
                        <Link to="/projects" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Projets</Link>
                    </Magnetic>
                    <Magnetic strength={20}>
                        <Link to="/contact" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Contact</Link>
                    </Magnetic>
                </div>

                <Link to="/contact" className="px-6 py-2 bg-primary text-black font-space font-bold uppercase text-xs tracking-widest rounded-full hover:-translate-y-1 transition-transform">
                    Menu
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
