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
        <section className="py-20 reveal">
            <div ref={terminalRef} className="max-w-3xl mx-auto bg-surface backdrop-blur-xl border border-border-subtle rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                <div className="bg-primary/10 px-4 py-2 border-b border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-primary" />
                        <span className="text-[10px] font-space text-primary uppercase tracking-widest">System Interface</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/10"></div>
                        <div className="w-2 h-2 rounded-full bg-white/10"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    </div>
                </div>
                <div className="p-6 h-48 md:h-64 overflow-y-auto font-mono text-xs text-text-muted space-y-2">
                    {history.map((line, i) => (
                        <div key={i} className={line.startsWith('>') ? 'text-main font-bold' : ''}>{line}</div>
                    ))}
                    <form onSubmit={handleCommand} className="flex items-center gap-2">
                        <span className="text-main font-bold"> $ </span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none flex-1 text-main"
                            placeholder="Type 'help'..."
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AITerminal;
