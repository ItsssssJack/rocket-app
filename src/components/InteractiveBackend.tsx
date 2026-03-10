import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Lock, Cloud, Workflow, Terminal } from 'lucide-react';

const services = [
    {
        id: 'db',
        name: 'Database',
        icon: Database,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500',
        code: `// Prisma Schema\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  name      String?\n  createdAt DateTime @default(now())\n  posts     Post[]\n}`
    },
    {
        id: 'auth',
        name: 'Authentication',
        icon: Lock,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500',
        code: `// Auth.js Configuration\nexport const authOptions = {\n  providers: [\n    GitHubProvider({\n      clientId: process.env.GITHUB_ID,\n      clientSecret: process.env.GITHUB_SECRET,\n    })\n  ],\n  session: {\n    strategy: "jwt",\n  }\n}`
    },
    {
        id: 'storage',
        name: 'Storage',
        icon: Cloud,
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500',
        code: `// S3 Bucket Client\nimport { S3Client } from "@aws-sdk/client-s3"\n\nexport const s3Client = new S3Client({\n  region: process.env.AWS_REGION,\n  credentials: {\n    accessKeyId: process.env.AWS_KEY,\n    secretAccessKey: process.env.AWS_SECRET\n  }\n})`
    },
    {
        id: 'api',
        name: 'API Gateway',
        icon: Workflow,
        color: 'text-rose-400',
        bgColor: 'bg-rose-500',
        code: `// Route Handler\nexport async function GET(req: Request) {\n  try {\n    const users = await db.user.findMany()\n    return Response.json(users)\n  } catch (error) {\n    return new Response("Internal Error", { status: 500 })\n  }\n}`
    },
];

export const InteractiveBackend = () => {
    const [activeServices, setActiveServices] = useState<string[]>(['db', 'api']);

    const toggleService = (id: string) => {
        setActiveServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Architectured for scale. <br className="hidden md:block" />Ready instantly.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-400 max-w-2xl font-light"
                >
                    Toggle infrastructure on and off. Rocket generates the boilerplate, connects the pipes, and prepares your app for massive scale.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/15"
            >
                <div className="bg-black/60 border-b border-white/10 px-4 py-3 flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
                            <Lock className="w-3 h-3" /> rocket-universe.app
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 min-h-[450px]">
                    <div className="border-r border-white/10 p-6 bg-black/40">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                            <Server className="w-4 h-4" /> Infrastructure
                        </h3>
                        <div className="space-y-4">
                            {services.map(service => {
                                const isActive = activeServices.includes(service.id);
                                return (
                                    <div
                                        key={service.id}
                                        onClick={() => toggleService(service.id)}
                                        className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-white/10 border-white/10' : 'hover:bg-white/5'} border border-transparent`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <service.icon className={`w-5 h-5 ${isActive ? service.color : 'text-slate-600'}`} />
                                            <span className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                                {service.name}
                                            </span>
                                        </div>
                                        <div className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${isActive ? service.bgColor : 'bg-white/10'}`}>
                                            <motion.div
                                                layout
                                                initial={false}
                                                animate={{ x: isActive ? 16 : 4 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                className={`w-4 h-4 rounded-full absolute top-1 shadow-md ${isActive ? 'bg-white' : 'bg-slate-400'}`}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#0d1117] p-8 overflow-y-auto max-h-[500px]">
                        <div className="flex items-center gap-2 text-slate-400 mb-6 border-b border-white/10 pb-4">
                            <Terminal className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium font-mono">Generated Output</span>
                        </div>

                        <div className="space-y-8 text-sm md:text-base">
                            <AnimatePresence>
                                {activeServices.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-slate-500 font-mono italic p-8 text-center h-full flex items-center justify-center"
                                    >
                    // No services selected. Enable services to view generated code.
                                    </motion.div>
                                )}

                                {services.map(service => activeServices.includes(service.id) && (
                                    <motion.div
                                        key={`code-${service.id}`}
                                        initial={{ opacity: 0, height: 0, y: -20 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-[#161b22] border border-white/5 rounded-xl p-5 shadow-inner">
                                            <pre className="font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                                {service.code.split('\n').map((line, i) => {
                                                    if (line.startsWith('//')) return <span key={i} className="text-slate-500 block">{line}</span>;
                                                    return <span key={i} className="block">{line}</span>;
                                                })}
                                            </pre>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
