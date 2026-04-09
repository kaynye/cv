import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "expo.inOut",
                    onComplete: onComplete
                });
            }
        });

        // Simulating load progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);

        tl.to(textRef.current, { opacity: 1, duration: 0.5 })
            .to(barRef.current, { scaleX: 1, duration: 2, ease: "power4.inOut" }, 0);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6"
        >
            <div className="max-w-xs w-full">
                <div ref={textRef} className="opacity-0 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary flex justify-between">
                    <span>Initializing Kany.Dev</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
                <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                    <div
                        ref={barRef}
                        className="absolute top-0 left-0 h-full bg-primary origin-left scale-x-0 w-full"
                    />
                </div>
                <div className="mt-8 grid grid-cols-4 gap-2 opacity-20">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-1 bg-white animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-space text-white/20 uppercase tracking-widest text-center">
                &copy; Elite Solution Engine v4.0.1 <br />
                System Protocol: ANTIGRAVITY
            </div>
        </div>
    );
};

export default Preloader;
