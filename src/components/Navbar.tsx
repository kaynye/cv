import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
            <div className="glass px-8 py-4 flex items-center justify-between shadow-2xl">
                <div className="text-xl font-space font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer">
                    KANY<span className="text-primary italic">DEV</span>
                </div>

                <div className="hidden md:flex gap-8">
                    <a href="#about" className="nav-link">Expertise</a>
                    <a href="#specialties" className="nav-link">Services</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <button className="bg-primary text-black px-4 py-2 rounded-xl text-xs font-bold uppercase hover:scale-105 transition-transform active:scale-95 shadow-brutal border border-black">
                    Menu
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
