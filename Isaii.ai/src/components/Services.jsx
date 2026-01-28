import React from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react'; // Placeholder icons

const Services = () => {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
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
                </div>

                {/* Masonry/Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* SaaS Products - Large Card */}
                    <div className="md:col-span-1 bg-[#F5F5F7] rounded-3xl p-8 flex flex-col h-full">
                        <div className="h-48 bg-purple-100 rounded-2xl mb-8 overflow-hidden relative">
                            {/* Placeholder for the SaaS dashboard image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-80"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">SaaS Products</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.
                        </p>
                        <div className="flex gap-2 mt-auto">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs">F</div>
                            <div className="w-8 h-8 bg-[#F7DF1E] rounded-full flex items-center justify-center text-black font-bold text-xs">JS</div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Outstaffing Card */}
                        <div className="bg-[#EFEDFD] p-8 rounded-3xl flex-1">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Outstaffing of IT specialists and project teams</h3>
                            <p className="text-gray-500 text-xs mb-4">We select specialists and connect them to projects in 48 hours.</p>
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                            </div>
                        </div>
                        {/* Custom AI Solutions Card */}
                        <div className="bg-[#E0F2FE] p-8 rounded-3xl flex-1">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Custom AI Solutions</h3>
                            <p className="text-gray-500 text-xs text-pretty">
                                We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.
                            </p>
                            <div className="mt-8 h-32 bg-gray-900 rounded-xl overflow-hidden relative">
                                {/* Placeholder for AI interface */}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Web Application */}
                        <div className="bg-[#F3EFE0] p-8 rounded-3xl">
                            <div className="h-32 mb-6 overflow-hidden rounded-xl bg-white border border-gray-100 p-2 shadow-sm">
                                {/* Placeholder grid of screens */}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Web Application</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.
                            </p>
                        </div>
                        {/* Mobile Application */}
                        <div className="bg-[#F5F5F7] p-8 rounded-3xl flex-1">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Mobile Application</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Our mobile app development services create user-friendly, high-performance apps that cater to your business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
