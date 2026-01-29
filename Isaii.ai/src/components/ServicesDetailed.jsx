import React from 'react';
import { motion } from 'framer-motion';

const ServicesDetailed = () => {
    const services = [
        {
            title: "Designing",
            description: "We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand's goals for optimal customer interaction.",
            image: "/service 3.png",
        },
        {
            title: "Custom AI Solutions",
            description: "We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.",
            image: "/service 2.png",
        },
        {
            title: "SaaS Products",
            description: "We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.",
            image: "/service 1.png",
        },
        {
            title: "Web Application",
            description: "We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.",
            image: "/service 4.png",
        },
        {
            title: "Mobile Application",
            description: "Our mobile app development services create user-friendly, high-performance apps that cater to your business goals, offering a superior mobile experience for customers.",
            image: "/service 5.png",
        }
    ];

    return (
        <section className="pb-24 pt-8 bg-white min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
                        <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                            Isaii.ai
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Professional Services That Showcase Our Expertise
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group cursor-pointer flex flex-col`}
                        >
                            {/* Card Image */}
                            <div className="relative h-[280px] rounded-[2rem] overflow-hidden mb-8 bg-gray-100 shadow-sm border border-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="pr-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDetailed;
