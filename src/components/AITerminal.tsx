import React, { useState, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { gsap } from 'gsap';

const AITerminal: React.FC = () => {
    const [history, setHistory] = useState<string[]>([
        "Neural Engine v4.0.2 initialized...",
        "Scanning security protocols...",
        "Identity verified: KANY_DEV",
        "Ready for transmission."
    ]);
    const [input, setInput] = useState("");
    const terminalRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.toLowerCase().trim();
        let response = `Command not found: ${cmd}`;

        if (cmd === 'help') response = "Available: projects, services, about, secret, hack, matrix, clear";
        else if (cmd === 'projects') response = "Analyzing project modules... DONE.";
        else if (cmd === 'services') response = "Scanning service architecture... ONLINE.";
        else if (cmd === 'secret') response = "LEVEL 7 ACCESS GRANTED: You found the hidden layer.";
        else if (cmd === 'hack') {
            response = "INITIATING OVERRIDE...";
            gsap.to("body", { backgroundColor: "#facc15", duration: 0.1, repeat: 5, yoyo: true });
        }
        else if (cmd === 'matrix') {
            response = "WAKE UP, NEO...";
            document.body.classList.add('matrix-mode');
            setTimeout(() => document.body.classList.remove('matrix-mode'), 3000);
        }
        else if (cmd === 'clear') {
            setHistory([]);
            setInput("");
            return;
        }

        setHistory(prev => [...prev, `> ${input}`, response]);
        setInput("");
    };

    return (
        <section className="py-32 reveal px-6">
            <div
                ref={terminalRef}
                className="max-w-4xl mx-auto border-[3px] border-text-main shadow-[12px_12px_0px_0px_var(--app-text-main)] overflow-hidden transition-all duration-300"
                style={{ backgroundColor: 'var(--app-bg-main)' }}
            >
                {/* Terminal Header - Constant Brutalist Yellow */}
                <div className="bg-primary px-5 py-3 border-b-[3px] border-text-main flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Terminal size={18} className="text-black" strokeWidth={3} />
                        <span className="text-xs font-mono font-black text-black uppercase tracking-widest">
                            System_Interface_v4.2.0
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 border-2 border-black bg-transparent"></div>
                        <div className="w-3 h-3 border-2 border-black bg-transparent"></div>
                        <div className="w-3 h-3 border-2 border-black bg-black"></div>
                    </div>
                </div>

                {/* Terminal Body - Paper in Light Mode / OLED in Dark Mode */}
                <div
                    className="p-8 h-64 md:h-80 overflow-y-auto font-mono text-sm space-y-3 scrollbar-custom"
                    style={{ color: 'var(--app-text-main)' }}
                >
                    {history.map((line, i) => (
                        <div
                            key={i}
                            className={`
                                ${line.startsWith('>') ? 'text-primary font-black' : 'opacity-80'} 
                                ${line.includes('GRANTED') ? 'bg-primary/20 p-1 border-l-4 border-primary' : ''}
                            `}
                        >
                            {line}
                        </div>
                    ))}
                    <form onSubmit={handleCommand} className="flex items-center gap-3 pt-2">
                        <span className="text-primary font-black"> [SYSTEM@KANY_DEV]:~$ </span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none flex-1 text-text-main placeholder:opacity-30"
                            placeholder="Type 'help'..."
                            autoFocus
                        />
                    </form>
                </div>

                {/* Footer status bar */}
                <div className="bg-text-main text-bg-main px-4 py-1 text-[8px] font-mono flex justify-between uppercase font-bold">
                    <span>STATUS: ONLINE</span>
                    <span>ENCRYPTION: AES-256</span>
                    <span>LATENCY: 12ms</span>
                </div>
            </div>
        </section>
    );
};

export default AITerminal;
