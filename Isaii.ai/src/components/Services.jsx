import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-[1400px] mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-6 bg-white">
                            Our services
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Professional Services That<br />
                            Showcase Our Expertise.
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-right md:text-left">
                        From creative design to technical solutions, our services define industry excellence.
                    </p>
                </motion.div>

                {/* Masonry/Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* SaaS Products - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-1 bg-[#F5F5F7] rounded-[2rem] p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl mb-8 overflow-hidden relative shadow-inner group">
                            {/* CSS-only UI Mockup */}
                            <div className="absolute top-8 left-8 right-0 bottom-0 bg-white/10 backdrop-blur-sm rounded-tl-xl border-t border-l border-white/20 p-4 transition-transform duration-500 group-hover:scale-105">
                                <div className="flex gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                                    <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                                    <div className="mt-4 h-24 bg-white/5 rounded-lg border border-white/10"></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">SaaS Products</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.
                        </p>
                        <div className="flex gap-2 mt-auto">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">F</div>
                            <div className="w-8 h-8 bg-[#F7DF1E] rounded-full flex items-center justify-center text-black font-bold text-xs">JS</div>
                        </div>
                    </motion.div>

                    {/* Middle Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Outstaffing Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#EFEDFD] p-8 rounded-[2rem] flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">Outstaffing of IT specialists and project teams</h3>
                                <p className="text-gray-500 text-sm mb-6">We select specialists and connect them to projects in 48 hours.</p>
                            </div>
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full bg-blue-200 border-4 border-white flex items-center justify-center text-xl shadow-sm">👨‍💻</div>
                                <div className="w-12 h-12 rounded-full bg-green-200 border-4 border-white flex items-center justify-center text-xl shadow-sm">👩‍💼</div>
                                <div className="w-12 h-12 rounded-full bg-purple-200 border-4 border-white flex items-center justify-center text-xl shadow-sm">🧑‍🚀</div>
                            </div>
                        </motion.div>

                        {/* Custom AI Solutions Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#E0F2FE] p-8 rounded-[2rem] flex-1 min-h-[300px] hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Custom AI Solutions</h3>
                            <p className="text-gray-500 text-sm text-pretty mb-6">
                                We provide bespoke AI systems tailored to your business needs, enhancing efficiency.
                            </p>
                            <div className="w-full h-32 bg-[#1e293b] rounded-xl overflow-hidden relative shadow-lg group">
                                <div className="absolute top-0 left-0 w-full h-6 bg-[#0f172a] flex items-center px-2 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="p-4 pt-8 text-[8px] text-green-400 font-mono leading-relaxed opacity-80">
                                    &gt; initializing ai_core...<br />
                                    &gt; loading modules [████████] 100%<br />
                                    &gt; optimization complete.<br />
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Web Application */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#F3EFE0] p-8 rounded-[2rem] min-h-[320px] overflow-hidden relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-6 relative h-24">
                                <div className="absolute top-0 left-0 w-[80%] h-24 bg-white rounded-xl shadow-sm border border-gray-100 transform -rotate-6 transition-transform group-hover:-rotate-3 p-3">
                                    <div className="w-full h-2 bg-gray-100 rounded mb-2"></div>
                                    <div className="flex gap-2">
                                        <div className="w-1/3 h-12 bg-gray-50 rounded"></div>
                                        <div className="w-2/3 h-12 bg-gray-50 rounded"></div>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-0 w-[70%] h-24 bg-white rounded-xl shadow-md border border-gray-100 transform rotate-3 transition-transform group-hover:rotate-6 z-10 p-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 mb-2"></div>
                                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Web Application</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We develop custom web applications designed to deliver seamless functionality and drive business growth.
                            </p>
                        </motion.div>

                        {/* Mobile Application */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#F5F5F7] p-8 rounded-[2rem] flex-1 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center"
                        >
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Application</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our mobile app development services create user-friendly, high-performance apps that cater to your business goals.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
