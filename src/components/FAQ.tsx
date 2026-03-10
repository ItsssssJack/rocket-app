import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        "q": "What happens after I run the prompt?",
        "a": "Rocket provisions a full monorepo with your frontend, backend API, database schema, and deployment configurations already connected."
    },
    {
        "q": "Can I export the code?",
        "a": "Yes! The core philosophy of Rocket is no lock-in. You can download your source code, connect to your own GitHub repo, or eject at any time."
    },
    {
        "q": "What frameworks do you support?",
        "a": "Currently, we support React and Next.js for the frontend, combined with Node/Express or Next.js API Routes for the backend. Support for Vue and Python is coming soon."
    },
    {
        "q": "Is the generated code production-ready?",
        "a": "Absolutely. We don't generate 'spaghetti' code. The output uses enterprise-grade design patterns, proper folder structures, type safety (TypeScript), and Tailwind CSS for styling."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center"
            >
                FAQs
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 mb-16 text-center font-light"
            >
                Everything you need to know about the product.
            </motion.p>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary border-primary' : 'bg-white/5 hover:bg-white/10'}`}>
                                    <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-6 text-slate-400 leading-relaxed text-base border-t border-white/5 pt-4 mt-2">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
