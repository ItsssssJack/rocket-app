import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Rocket as RocketIcon, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
    const cards = [
        {
            title: "One Promp To Build It All",
            description: "High-quality, custom UI apps generated in seconds. Designs authentic user experience to generate a UI.",
            image: "brain.png",
            delay: 0
        },
        {
            title: "Backend Included",
            description: "Clean full-stack app generation complete with APIs, database schemas, and all your backend code.",
            image: "globe.png",
            delay: 0.1
        },
        {
            title: "One-Click Launch",
            description: "Launch is a marketplace for generated apps. A truly production-ready native deployment process.",
            image: "rocket-launch.png",
            delay: 0.2
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="mb-16 text-center md:text-left">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary text-sm font-semibold mb-3 uppercase tracking-widest"
                >
                    How Rocket does it
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight"
                >
                    From concept to production <br className="hidden md:block" /> in spectacular fashion.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400 max-w-2xl font-light"
                >
                    Stop configuring and start building. We handle the complicated pipelines so you can focus on your product.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: card.delay, duration: 0.6 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                    >
                        <div className="h-64 relative overflow-hidden bg-bg-dark">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src={`/${card.image}`}
                                alt={card.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-slate-400 text-base leading-relaxed flex-1">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <button className="cursor-pointer bg-primary/10 border border-primary/40 text-blue-300 hover:bg-primary/20 hover:text-white transition-all duration-300 rounded-full px-8 py-3 text-sm font-bold shadow-lg hover:scale-105 flex items-center gap-2 mx-auto">
                    Sounds unbelievable? Try it <ArrowRight className="w-4 h-4" />
                </button>
            </motion.div>
        </section>
    );
};
