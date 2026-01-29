import React, { useState } from 'react';
import { Send, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Trial Period?", answer: "We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand." },
        { question: "Performance Guarantees?", answer: "We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best." },
        { question: "Customer Support?", answer: "Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues." },
        { question: "Customization Options?", answer: "Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements." },
        { question: "Data Security?", answer: "We implement robust security measures, including encryption and compliance with GDPR and other data protection standards." },
        { question: "Updates and Maintenance?", answer: "Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation." },
    ];

    return (
        <footer className="bg-[#111111] text-white pt-12 pb-8">
            {/* FAQ Section */}
            <div className="max-w-[1400px] mx-auto px-6 mb-16 bg-white rounded-[40px] text-black py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Explore Our FAQs</h2>
                    <p className="text-gray-500 text-sm">Find quick answers to commonly asked questions about Isaii-AI.<br />Have a question not listed?</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 px-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-bold text-base text-gray-900">{faq.question}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-800 pb-8">
                    <div>
                        <h2 className="text-6xl md:text-8xl lg:text-[120px] leading-none font-bold text-gray-700 select-none tracking-tighter">
                            ISAII-AI
                        </h2>
                    </div>

                    <div className="w-full md:w-auto md:min-w-[400px] mb-4">
                        <h4 className="text-xl font-medium mb-6">Subscribe to Our Newsletter</h4>
                        <div className="flex items-center border-b border-gray-700 py-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent border-none outline-none flex-grow text-white placeholder-gray-600"
                            />
                            <button className="text-white hover:text-gray-300">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Copyright © 2024 - Isaii-AI</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/isaii.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white transition-colors" target='_blank'><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/company/isaii/" className="hover:text-white transition-colors" target='_blank'><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
