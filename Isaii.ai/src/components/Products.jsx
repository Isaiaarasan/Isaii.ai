import React from 'react';

const Products = () => {
    const productList = [
        { title: "Isaii-Daillo", subtitle: "Telephony AI", color: "bg-blue-50" },
        { title: "Isaii Whispher", subtitle: "Voice AI that can be integrated wherever he want", color: "bg-purple-50" },
        { title: "Isaii Assit", subtitle: "Chatbot that can be intergrated to their website in 1 click", color: "bg-pink-50" },
        { title: "Isaii WhatsApp", subtitle: "Chatbot intergrated to Whatsapp", color: "bg-green-50" },
        { title: "Isaii Instagram", subtitle: "Chatbot intergrated to Instagram", color: "bg-indigo-50" },
        { title: "Isaii Direct", subtitle: "Directly Access our API with key and can limit your access", color: "bg-gray-50" },
        { title: "Bill Buddy", subtitle: "Ai integrated self billing system", color: "bg-blue-50" },
        { title: "Direkt", subtitle: "Ai integrated product selling solution", color: "bg-orange-50" },
        { title: "Isaii Commerce", subtitle: "Ai intergrate E-commerce solution", color: "bg-red-50" },
    ];

    return (
        <section className="py-24 bg-white" id="products">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Building Digital Excellence with Isaii.
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Discover the innovative marketing strategies that set Isaii-Ai apart, driving success in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productList.map((item, index) => (
                        <div key={index} className="group hover:bg-white rounded-3xl p-6 transition-all duration-300 border border-gray-100 bg-[#F5F5F7]">
                            {/* Image Placeholder area - mimics the screenshot cards */}
                            <div className={`h-48 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative ${item.color}`}>
                                {/* In a real app we would put the specific screenshots here. 
                       For now, a placeholder with gradients or simple abstract shapes to match the vibe.
                   */}
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm m-4 rounded-xl flex flex-col items-center justify-center border border-white/50 shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-black mb-2 flex items-center justify-center text-white font-bold text-xs">AI</div>
                                    <span className="text-2xl font-bold text-[#111]">{item.title.split(' ')[0]}</span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">AGENT</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
