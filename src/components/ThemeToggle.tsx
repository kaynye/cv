import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        if (isLight) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isLight]);

    return (
        <button
            onClick={() => setIsLight(!isLight)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-main hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
        >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
    );
};

export default ThemeToggle;
