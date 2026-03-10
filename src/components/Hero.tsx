import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, ArrowRight } from 'lucide-react';
import {
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiSvelte,
    SiAngular,
    SiNodedotjs,
    SiPython,
    SiGo,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiTailwindcss
} from 'react-icons/si';

const frameworks = [
    { icon: SiReact, color: 'hover:text-[#61DAFB]', name: 'React' },
    { icon: SiNextdotjs, color: 'hover:text-white', name: 'Next.js' },
    { icon: SiVuedotjs, color: 'hover:text-[#4FC08D]', name: 'Vue.js' },
    { icon: SiSvelte, color: 'hover:text-[#FF3E00]', name: 'Svelte' },
    { icon: SiAngular, color: 'hover:text-[#DD0031]', name: 'Angular' },
    { icon: SiTailwindcss, color: 'hover:text-[#06B6D4]', name: 'Tailwind' },
    { icon: SiNodedotjs, color: 'hover:text-[#339933]', name: 'Node.js' },
    { icon: SiPython, color: 'hover:text-[#3776AB]', name: 'Python' },
    { icon: SiGo, color: 'hover:text-[#00ADD8]', name: 'Go' },
    { icon: SiPostgresql, color: 'hover:text-[#4169E1]', name: 'PostgreSQL' },
    { icon: SiMysql, color: 'hover:text-[#4479A1]', name: 'MySQL' },
    { icon: SiMongodb, color: 'hover:text-[#47A248]', name: 'MongoDB' },
];

export const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden w-full">
            <div className="absolute inset-0 hero-bg bg-pan-anim opacity-90 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/40 to-bg-dark"></div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-6 w-full mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-[0_0_10px_rgba(80,56,240,0.5)]">
                        New
                    </span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors tracking-wide flex items-center">
                        Rocket Models 2.0 is live
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl"
                >
                    Think It. <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-400 animate-pulse">
                        Type It.
                    </span> <br className="md:hidden" />
                    Launch It.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
                >
                    Build stunning, production-ready applications with AI-powered precision. The universe is yours.
                </motion.p>

                {/* Prompt Input Line */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-3xl mx-auto relative group mt-10 md:mt-12"
                >
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700"></div>
                    <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 flex items-center shadow-2xl transition-transform duration-300 focus-within:scale-[1.02]">
                        <Sparkles className="text-primary/90 ml-4 mr-3 w-6 h-6 animate-pulse" />
                        <input
                            className="w-full bg-transparent border-none text-white focus:ring-0 focus:outline-none placeholder-slate-400 text-lg md:text-xl py-4 transition-all duration-300"
                            placeholder="Describe your dream app..."
                            type="text"
                        />
                        <div className="flex items-center gap-3 pr-2 pl-2">
                            <button className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center hover:scale-110 transition-all duration-300 shrink-0 shadow-[0_0_20px_rgba(80,56,240,0.6)] pulse-glow group-hover:bg-blue-500">
                                <Send className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Frameworks Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 flex justify-center w-full"
                >
                    <div className="glass-card px-8 py-5 inline-block transition-transform duration-500 hover:bg-white/5">
                        <div className="flex items-center justify-center mb-5 border-b border-white/10 pb-3">
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Supported Frameworks</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-2xl md:text-3xl">
                            {frameworks.map((fw) => (
                                <div key={fw.name} title={fw.name} className={`transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1 ${fw.color}`}>
                                    <fw.icon />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
