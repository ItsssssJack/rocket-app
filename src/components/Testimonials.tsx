import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        initial: 'A',
        name: 'Alex Rivera',
        handle: '@arivera_dev',
        color: 'from-blue-400 to-purple-500',
        quote: "Rocket completely changed how I prototype. What used to take weeks of backend setup now takes literally minutes. The AI understands exactly what I need."
    },
    {
        initial: 'S',
        name: 'Samantha Lee',
        handle: '@samlee_creates',
        color: 'from-indigo-400 to-primary',
        quote: "I'm not a developer, but Rocket made me feel like one. I described my dream app and it just... built it. The design quality blew my mind."
    },
    {
        initial: 'M',
        name: 'Marcus Johnson',
        handle: '@marcusj_builds',
        color: 'from-blue-500 to-teal-400',
        quote: "As a startup founder, speed is everything. Rocket let me launch my MVP in a single afternoon. The backend was already configured perfectly."
    }
];

export const Testimonials = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6"
            >
                <Quote className="text-primary w-8 h-8" />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
                Happiness Speaks
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 mb-16 font-light"
            >
                Testimonials from creators with imaginations.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={t.handle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                        className="glass-card p-8 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 group relative"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-12 h-12 text-white" />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-white/10`}>
                                {t.initial}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                                <p className="text-sm text-slate-400">{t.handle}</p>
                            </div>
                        </div>

                        <div className="flex gap-1 mb-5 text-[#FFB800]">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-base italic">"{t.quote}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
