import React from 'react';
import { Rocket, PenTool, LayoutTemplate } from 'lucide-react'; // Approximating icons

const Features = () => {
    return (
        <section className="py-24 bg-[#F8F9FB]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Inter']">
                        Unleash the Power of Our AI Innovations
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        From data processing to intelligent automation, our AI solutions seamlessly integrate into your
                        existing infrastructure, empowering you to make smarter, faster decisions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6 text-gray-700">
                            <Rocket size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Products</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Explore our suite of advanced AI solutions crafted to optimize workflows, elevate user experiences, and foster innovation across diverse industries and platforms.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6 text-gray-700">
                            <PenTool size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Redefine digital experiences with our dynamic design expertise, crafted to engage users through visually compelling and purpose-driven creations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6 text-gray-700">
                            <LayoutTemplate size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Customised Products</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Experience our tailored AI services designed to automate processes, improve decision-making, and deliver transformative results for businesses across various domains.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
