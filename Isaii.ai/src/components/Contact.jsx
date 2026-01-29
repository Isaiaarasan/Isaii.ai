import React from 'react';
import { MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-16 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
                    <span className="text-sm font-bold tracking-tight text-gray-500 uppercase">
                        Isaii Contact
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Get in touch with us today!
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
                </p>
            </div>

            {/* Info Cards */}
            <div className="max-w-[1400px] mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Message us</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Message us using our online chat system for quick and efficient support.
                        </p>
                        <div className="pt-6 border-t border-gray-100">
                            <a href="mailto:support@isaii.com" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                support@isaii.com
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Let's have a chat – there's nothing quite like talking to another person.
                        </p>
                        <div className="pt-6 border-t border-gray-100">
                            <a href="mailto:hr@isaii.in" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                hr@isaii.in
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            We'd be delighted to welcome you to our Head Office.
                        </p>
                        <div className="pt-6 border-t border-gray-100">
                            <span className="text-sm font-semibold text-gray-900">
                                Coimbatore
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="bg-white rounded-[3rem] border border-gray-100 shadow-lg overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16">
                    {/* Left Content */}
                    <div className="lg:w-5/12 pt-8">
                        <div className="mb-6">
                            {/* Rocket Icon Placeholder */}
                            <Send className="w-8 h-8 text-gray-700 -rotate-45" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Feel free to send our friendly team a message
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Message us using our online chat system for quick and efficient support.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className="lg:w-7/12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    placeholder="Type your message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white text-gray-800 placeholder-gray-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1e40af] hover:bg-blue-800 text-white font-bold rounded-xl transition-colors uppercase tracking-wide text-sm"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
