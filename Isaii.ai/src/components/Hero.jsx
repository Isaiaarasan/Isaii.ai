import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-10">
            {/* Hero Card */}
            <div className="relative bg-[#111111] rounded-[2.5rem] min-h-[560px] shadow-2xl flex items-center">

                {/* Right Side Shapes Container */}
                <div className="absolute inset-y-0 right-0 w-[50%] pointer-events-none">
                    {/* Top Ribbed Sphere */}
                    <img
                        src="/D2.png"
                        alt="Ribbed Sphere"
                        className="absolute top-[12%] right-[44%] w-[22%] z-70"
                    />

                    {/* Center Floating Jack */}
                    <img
                        src="/D1.png"
                        alt="Floating Jack"
                        className="absolute bottom-[-10%] right-[32%] w-[50%] z-30 animate-float"
                    />

                    {/* Bottom Flower */}
                    <img
                        src="/D3.png"
                        alt="Flower Shape"
                        className="absolute bottom-[22%] right-[3%] w-[30%] z-10"
                    />
                </div>

                {/* Content */}
                <div className="relative z-40 w-full px-8 md:px-12 lg:px-20 py-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
                            Innovate, Automate,
                            <br />
                            and Succeed with AI
                        </h1>

                        <p className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
                            Innovative AI technology designed to solve pressing challenges,
                            providing businesses with strategic, actionable problem-solving tools.
                        </p>

                        <button className="group flex items-center bg-[#2A2A2A] hover:bg-[#333333] transition rounded-full pl-5 pr-1.5 py-1.5 border border-white/5 shadow-lg">
                            <span className="text-white font-medium mr-4">
                                Schedule a call
                            </span>
                            <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center group-hover:bg-[#FF8533] transition">
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
