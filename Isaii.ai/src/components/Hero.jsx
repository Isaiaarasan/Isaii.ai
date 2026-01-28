import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#111111] text-white overflow-hidden flex flex-col pt-20">
            {/* Navbar integrated or separate? Typically separate but overlaying. 
          The design shows a white header on scroll, or transparent on dark bg?
          Wait, looking at image 0, the header is actually white pill shaped or just white background?
          Image 0 top left shows "Isaii" logo on a white/light bg pill? No, it's just the logo on white bg.
          But the hero is dark. Let's assume the navbar sits on top.
      */}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex-grow mt-20 mb-20">

                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                        Innovate, Automate,<br />
                        and Succeed with AI
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                        Innovative AI technology designed to solve pressing challenges,
                        providing businesses with strategic, actionable problem-solving
                        tools.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="group flex items-center bg-[#333333] hover:bg-[#444] transition-colors rounded-full pl-6 pr-2 py-2">
                            <span className="font-medium mr-4">Schedule a call</span>
                            <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center group-hover:bg-[#FF8533] transition-colors">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* 3D Abstract Elements - Using CSS approximations or placeholders since we can't generate 3D assets easily without images */}
                {/* Top Right Swirl */}
                <div className="absolute top-20 right-[10%] w-64 h-64 md:w-80 md:h-80 opacity-90 pointer-events-none">
                    {/* We will use a gradient sphere as placeholder or image if available */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black shadow-2xl animate-pulse"></div>
                    {/* If user provided images were assets, I'd use them. But they are screenshots. I'll rely on simple shapes for now unless I find assets. */}
                </div>

                {/* Bottom Right Shape */}
                <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 opacity-90 pointer-events-none">
                    <div className="w-full h-full rounded-full bg-gradient-to-tl from-gray-800 to-black shadow-2xl"></div>
                </div>

                {/* Intersecting shape bottom center */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 opacity-80 pointer-events-none hidden md:block">
                    <div className="w-full h-full rounded-full bg-gradient-to-t from-gray-900 to-gray-600 blur-xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
