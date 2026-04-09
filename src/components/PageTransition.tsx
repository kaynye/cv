import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition: React.FC = () => {
    const location = useLocation();
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Skip transition on initial site load to let Preloader handle things
        if (isFirstLoad) {
            setIsFirstLoad(false);
            return;
        }

        const tl = gsap.timeline();

        gsap.set(overlayRef.current, {
            display: 'block',
            yPercent: -100
        });

        tl.to(overlayRef.current, {
            yPercent: 0,
            duration: 0.6,
            ease: "power4.inOut"
        })
            .to(overlayRef.current, {
                yPercent: 100,
                duration: 0.6,
                ease: "power4.inOut",
                delay: 0.2,
                onComplete: () => {
                    gsap.set(overlayRef.current, { display: 'none' });
                }
            });

    }, [location.pathname]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[10000] bg-primary pointer-events-none hidden"
        />
    );
};

export default PageTransition;
