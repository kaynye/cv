import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import Magnetic from './Magnetic';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { to: '/about', label: 'Expertise' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projets' },
    { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Animate mobile menu on open
    useEffect(() => {
        if (!mobileMenuRef.current || !isOpen) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            gsap.set(mobileMenuRef.current, { opacity: 1, y: 0 });
        } else {
            gsap.fromTo(
                mobileMenuRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
            );
        }
    }, [isOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
                <div className="glass px-8 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-space font-black tracking-tighter hover:scale-105 transition-transform text-main"
                    >
                        KANY<span className="text-primary">.DEV</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(({ to, label }) => (
                            <Magnetic key={to} strength={20}>
                                <Link
                                    to={to}
                                    className="nav-link"
                                    aria-current={pathname === to ? 'page' : undefined}
                                >
                                    {label}
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        {/* Desktop CTA */}
                        <Link
                            to="/contact"
                            className="hidden md:flex px-6 py-2 bg-primary text-secondary font-space font-bold uppercase text-xs tracking-widest rounded-full hover:-translate-y-1 transition-transform"
                        >
                            Contact
                        </Link>
                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-main hover:scale-110 transition-transform"
                            onClick={() => setIsOpen(prev => !prev)}
                            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {isOpen && (
                <div
                    id="mobile-nav"
                    ref={mobileMenuRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation principale"
                    className="fixed inset-0 z-[90] flex flex-col items-center justify-center md:hidden"
                    style={{ backgroundColor: 'var(--app-bg-main)', backdropFilter: 'blur(24px)' }}
                >
                    <nav className="flex flex-col items-center gap-10">
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className="text-5xl font-space font-black uppercase tracking-tighter text-main hover:text-primary transition-colors duration-200"
                                aria-current={pathname === to ? 'page' : undefined}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className="absolute bottom-12 flex gap-6 text-xs font-space uppercase tracking-widest text-muted">
                        <span>hello@kanydev.ai</span>
                        <span className="opacity-30">·</span>
                        <span>Paris, France</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
