import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b transition-all duration-300 px-6 md:px-10 py-4 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-xl border-white/10 shadow-lg' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className="text-primary transition-transform duration-300 hover:rotate-12 hover:-translate-y-1">
                    <Rocket className="w-8 h-8" />
                </div>
                <h1 className="text-white text-xl font-bold tracking-tight">Rocket</h1>
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/30 uppercase tracking-wider hidden sm:block">
                    Beta
                </span>
            </div>

            <div className="flex flex-1 justify-end gap-8">
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium" href="#pricing">
                        Pricing
                    </a>
                    <a className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium" href="#careers">
                        Careers
                    </a>
                    <div className="relative group cursor-pointer">
                        <span className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                            Resources <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </span>
                    </div>
                </nav>
                <div className="flex gap-3">
                    <button className="hidden sm:block cursor-pointer rounded-full h-10 px-6 border border-white/20 hover:bg-white/5 transition-all duration-300 text-white text-sm font-semibold">
                        Sign in
                    </button>
                    <button className="cursor-pointer rounded-full h-10 px-6 bg-primary hover:bg-[#5a42f5] hover:scale-105 transition-all duration-300 text-white text-sm font-semibold shadow-[0_0_20px_rgba(80,56,240,0.4)]">
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    );
};
