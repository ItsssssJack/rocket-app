import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Send } from 'lucide-react';

export const Footer = () => {
    return (
        <>
            <section className="relative py-32 border-t border-white/10 overflow-hidden text-center min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 cta-bg opacity-70 scale-105"></div>
                <div className="absolute inset-0 bg-bg-dark/60 backdrop-blur-[2px]"></div>

                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/30 shadow-[0_0_30px_rgba(80,56,240,0.3)]"
                    >
                        <Rocket className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl"
                    >
                        Start building now.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-200 mb-10 font-medium drop-shadow-md"
                    >
                        Join 10,000+ developers shipping faster than ever before.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="cursor-pointer bg-primary hover:bg-[#6048fa] text-white px-10 py-5 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(80,56,240,0.5)] transition-all animate-pulse-glow hover:scale-105 flex items-center justify-center mx-auto gap-3"
                    >
                        Launch Your First App <Send className="w-5 h-5" />
                    </motion.button>
                </div>
            </section>

            <footer className="border-t border-white/5 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Rocket className="text-primary w-6 h-6" />
                        <span className="text-xl font-bold text-white tracking-tight">Rocket</span>
                    </div>

                    <div className="flex gap-8 text-sm text-slate-400 font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="#" className="hover:text-primary transition-colors">Discord</a>
                    </div>

                    <div className="text-sm text-slate-500">
                        &copy; 2026 Rocket Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};
