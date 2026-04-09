import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const AITerminal: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = "> Initializing KanyDev.ai...\n> Loading SEO modules... DONE\n> Building Neural Engine... 98%\n> Analysis: High-Conversion Potential Detected.";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="reveal mt-32 max-w-2xl mx-auto">
            <div className="bg-black/80 border-2 border-white/20 rounded-lg overflow-hidden brutal-card !shadow-none">
                <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] font-space text-white/40 uppercase tracking-widest">ai-terminal.log</div>
                    <Terminal size={14} className="text-white/40" />
                </div>
                <div className="p-6 font-mono text-sm">
                    <pre className="text-primary whitespace-pre-wrap">
                        {text}
                        <span className="animate-pulse">_</span>
                    </pre>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs font-space uppercase tracking-[.3em] text-white/30 italic">
                    AI INTEGRATION IN PROGRESS
                </p>
            </div>
        </div>
    );
};

export default AITerminal;
