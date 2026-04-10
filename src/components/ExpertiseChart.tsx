import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
    name: string;
    value: number; // 0 to 1
}

const SKILLS: Skill[] = [
    { name: 'Architecture IA', value: 0.9 },
    { name: 'Dév. Fullstack', value: 0.95 },
    { name: 'Optimisation SEO', value: 0.85 },
    { name: 'Performance', value: 0.92 },
    { name: 'UI/UX Design', value: 0.75 },
];

const ExpertiseChart: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const polygonRef = useRef<SVGPolygonElement>(null);
    const labelsRef = useRef<SVGGElement>(null);
    const pointsGroupRef = useRef<SVGGElement>(null);

    const size = 400;
    const center = size / 2;
    const radius = size * 0.35;
    const angleStep = (Math.PI * 2) / SKILLS.length;

    useEffect(() => {
        if (!polygonRef.current || !labelsRef.current || !pointsGroupRef.current) return;

        // Initial state
        gsap.set(polygonRef.current, { scale: 0, opacity: 0, transformOrigin: 'center' });
        gsap.set(labelsRef.current.children, { opacity: 0, y: 10 });
        gsap.set(pointsGroupRef.current.children, { scale: 0, opacity: 0, transformOrigin: 'center' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });

        tl.to(polygonRef.current, {
            scale: 1,
            opacity: 0.8,
            duration: 1.2,
            ease: 'expo.out'
        })
            .to(pointsGroupRef.current.children, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.out(2)'
            }, '-=0.8')
            .to(labelsRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.5');

        // Hover interactions for points
        const points = pointsGroupRef.current.children;
        Array.from(points).forEach((point) => {
            point.addEventListener('mouseenter', () => {
                gsap.to(point, { scale: 1.5, duration: 0.3, ease: 'power2.out' });
            });
            point.addEventListener('mouseleave', () => {
                gsap.to(point, { scale: 1, duration: 0.3, ease: 'power2.out' });
            });
        });

    }, []);

    // Helper to calculate point coordinates
    const getPoint = (index: number, value: number, r: number) => {
        const x = center + r * value * Math.cos(index * angleStep - Math.PI / 2);
        const y = center + r * value * Math.sin(index * angleStep - Math.PI / 2);
        return { x, y, str: `${x},${y}` };
    };

    const polygonPoints = SKILLS.map((s, i) => getPoint(i, s.value, radius).str).join(' ');
    const gridPoints = [0.25, 0.5, 0.75, 1].map(v =>
        SKILLS.map((_, i) => getPoint(i, v, radius).str).join(' ')
    );

    return (
        <section
            ref={containerRef}
            className="py-32 relative overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: 'var(--app-bg-main)', color: 'var(--app-text-main)' }}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="max-w-2xl reveal">
                        <div className="inline-block px-3 py-1 bg-primary text-primary-text font-mono text-xs mb-6 uppercase tracking-widest font-black">
                            Capabilities Matrix v4.2
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase glitch-hover">
                            Expertise <br /><span className="text-primary">Brutaliste</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-text-muted mb-10 leading-tight font-medium max-w-lg border-l-4 border-primary pl-6">
                            Fusion de l'IA générative et de l'ingénierie web.
                            Chaque axe représente une optimisation critique du futur digital.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {SKILLS.map((s, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 border-2 border-border-subtle hover:border-primary transition-colors cursor-default group bg-surface/10">
                                    <div className="w-4 h-4 bg-primary group-hover:rotate-90 transition-transform duration-500" />
                                    <div>
                                        <div className="font-mono text-xs text-text-muted uppercase mb-1">AXIS_{i + 1}</div>
                                        <div className="font-space font-black text-lg uppercase leading-none">{s.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center p-8 bg-surface/5 border-4 border-text-main shadow-[12px_12px_0px_0px_var(--app-text-main)] transition-all duration-500">
                        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
                            {/* Grid Lines - Simple and Stark */}
                            {gridPoints.map((gp, i) => (
                                <polygon
                                    key={i}
                                    points={gp}
                                    fill="none"
                                    stroke="currentColor"
                                    className="opacity-10"
                                    strokeWidth="2"
                                />
                            ))}

                            {/* Radial Lines */}
                            {SKILLS.map((_, i) => {
                                const p = getPoint(i, 1, radius);
                                return (
                                    <line
                                        key={i}
                                        x1={center} y1={center}
                                        x2={p.x} y2={p.y}
                                        stroke="currentColor"
                                        className="opacity-10"
                                        strokeWidth="2"
                                    />
                                );
                            })}

                            {/* Main Polygon - High Intensity */}
                            <polygon
                                ref={polygonRef}
                                points={polygonPoints}
                                fill="var(--app-accent)"
                                fillOpacity="0.15"
                                stroke="var(--app-accent)"
                                strokeWidth="4"
                                className="filter drop-shadow-[0_0_8px_var(--app-accent)]"
                            />

                            {/* Data Points */}
                            <g ref={pointsGroupRef}>
                                {SKILLS.map((s, i) => {
                                    const p = getPoint(i, s.value, radius);
                                    return (
                                        <circle
                                            key={i}
                                            cx={p.x} cy={p.y}
                                            r="6"
                                            fill="var(--app-accent)"
                                            className="cursor-pointer filter drop-shadow-[0_0_5px_var(--app-accent)]"
                                        />
                                    );
                                })}
                            </g>

                            {/* Labels - Space Mono for technical feel */}
                            <g ref={labelsRef}>
                                {SKILLS.map((s, i) => {
                                    const p = getPoint(i, 1.3, radius);
                                    const [x, y] = [p.x, p.y];
                                    return (
                                        <text
                                            key={i}
                                            x={x} y={y}
                                            fill="currentColor"
                                            fontSize="9"
                                            fontWeight="900"
                                            textAnchor="middle"
                                            className="font-mono uppercase tracking-tighter"
                                        >
                                            {s.name}
                                        </text>
                                    );
                                })}
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element - Starker Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--app-text-main) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </section>
    );
};

export default ExpertiseChart;
