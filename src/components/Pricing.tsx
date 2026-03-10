import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5" id="pricing">
            <div className="mb-16 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary text-sm font-semibold mb-3 uppercase tracking-widest"
                >
                    Plans
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                >
                    Simple Pricing
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400 font-light"
                >
                    Start for free, scale precisely as you grow.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-12">
                {/* Free Tier */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 hover:bg-white/5"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Hobby</h3>
                    <p className="text-slate-400 text-sm mb-6">Perfect for side projects and learning.</p>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white">$0</span>
                        <span className="text-slate-500 text-sm font-medium">/ forever</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1 text-slate-300 text-sm">
                        {['3 Projects', 'Basic Components', 'Community Support'].map(text => (
                            <li key={text} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> {text}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                        Start Free
                    </button>
                </motion.div>

                {/* Pro Tier */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 border-primary/50 bg-[#1a1a3a]/80 shadow-[0_0_40px_rgba(80,56,240,0.15)] relative scale-105 z-10"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-md">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-blue-200 text-sm mb-6">For professional creators.</p>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white">$19</span>
                        <span className="text-slate-500 text-sm font-medium">/ month</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1 text-slate-300 text-sm">
                        {['Unlimited Projects', 'Pro Components', 'Custom Domains', 'Priority Support'].map(text => (
                            <li key={text} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> {text}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-full bg-primary hover:bg-[#6048fa] text-white font-bold shadow-[0_0_20px_rgba(80,56,240,0.4)] transition-all animate-pulse-glow hover:scale-105">
                        Get Pro
                    </button>
                </motion.div>

                {/* Teams Tier */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 hover:bg-white/5"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Teams</h3>
                    <p className="text-slate-400 text-sm mb-6">For agencies and startups.</p>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white">$49</span>
                        <span className="text-slate-500 text-sm font-medium">/ month</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1 text-slate-300 text-sm">
                        {['Everything in Pro', 'Workspaces', 'Export Source Code', 'Custom SSO'].map(text => (
                            <li key={text} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> {text}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
