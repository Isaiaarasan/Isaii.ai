import React from "react";

const Products = () => {
    const productList = [
        {
            title: "Isaii-Daillo",
            subtitle: "Telephony AI",
            image: "/A1.avif",
        },
        {
            title: "Isaii Whispher",
            subtitle: "Voice AI that can be integrated wherever you want",
            image: "/A2.avif",
        },
        {
            title: "Isaii Assist",
            subtitle: "Chatbot that can be integrated to your website in 1 click",
            image: "/A3.avif",
        },
        {
            title: "Isaii WhatsApp",
            subtitle: "Chatbot integrated to WhatsApp",
            image: "/A4.avif",
        },
        {
            title: "Isaii Instagram",
            subtitle: "Chatbot integrated to Instagram",
            image: "/A5.avif",
        },
        {
            title: "Isaii Direct",
            subtitle: "Direct API access with key-based usage limits",
            image: "/A6.avif",
        },
        {
            title: "Bill Buddy",
            subtitle: "AI integrated self billing system",
            image: "/A7.avif",
        },
        {
            title: "Direkt",
            subtitle: "AI integrated product selling solution",
            image: "/A8.avif",
        },
        {
            title: "Isaii Commerce",
            subtitle: "AI integrated e-commerce solution",
            image: "/A9.avif",
        },
    ];

    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Building Digital Excellence with Isaii
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Discover the innovative AI products that help businesses automate,
                        scale, and succeed in the digital landscape.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productList.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-3xl border border-gray-100 bg-[#F5F5F7] p-6 transition-all duration-300 hover:bg-white hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#ECECF1]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
