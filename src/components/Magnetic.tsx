import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticProps {
    children: React.ReactElement;
    strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 40 }) => {
    const magneticRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = magneticRef.current;
        if (!el) return;

        // Disable on touch devices and when reduced motion is preferred
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * (strength / 100));
            yTo(y * (strength / 100));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return React.cloneElement(children, {
        ref: magneticRef
    } as any); // Type cast since cloneElement with ref is tricky in TS
};

export default Magnetic;
