import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <nav
            className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'top-6 left-1/2 -translate-x-1/2 w-auto'
                : 'top-0 left-0 w-full py-6'
                }`}
        >
            <div
                className={`flex items-center transition-all duration-500 ${scrolled
                    ? 'gap-2 p-2 rounded-full bg-gray-500/40 backdrop-blur-md shadow-2xl'
                    : 'justify-between px-6 md:px-12 max-w-[1400px] mx-auto'
                    }`}
            >
                {/* Logo Section */}
                <div className={`transition-all duration-500 flex items-center ${scrolled
                    ? 'bg-white rounded-full px-5 h-12 shadow-sm'
                    : 'bg-transparent'
                    }`}>
                    <Link to="/" onClick={scrollToTop} className={`relative block transition-all duration-500 ${scrolled ? 'h-6 w-24' : 'h-16 w-48'}`}>
                        <img src="/image.png" alt="Isaii" className="h-full w-full object-contain object-left" />
                    </Link>
                </div>

                {/* Desktop Menu Links */}
                <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled
                    ? 'gap-8 bg-[#111111] rounded-full px-8 h-12 shadow-sm'
                    : 'gap-8 bg-transparent'
                    }`}>
                    <Link to="/" onClick={scrollToTop} className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'}`}>
                        Home
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-white' : 'bg-black'}`}></span>
                    </Link>
                    <Link to="/products" onClick={scrollToTop} className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'}`}>
                        Our Products
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-white' : 'bg-black'}`}></span>
                    </Link>
                    <Link to="/services" onClick={scrollToTop} className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'}`}>
                        Services
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-white' : 'bg-black'}`}></span>
                    </Link>
                    <Link to="/contact" onClick={scrollToTop} className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'}`}>
                        Contact
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-white' : 'bg-black'}`}></span>
                    </Link>
                </div>

                {/* Mobile Menu Button - Adapted for Scrolled State */}
                <div className={`md:hidden flex items-center transition-all duration-500 ${scrolled
                    ? 'bg-[#111111] rounded-full w-12 h-12 justify-center text-white'
                    : 'text-gray-800'
                    }`}>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center justify-center w-full h-full">
                        {mobileMenuOpen ? <X size={scrolled ? 20 : 24} /> : <Menu size={scrolled ? 20 : 24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[90%] md:w-auto overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-3xl p-6 flex flex-col gap-4 border border-gray-200 mx-auto w-full">
                    <Link to="/" className="text-base font-medium text-gray-800 p-2 hover:bg-black/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="text-base font-medium text-gray-800 p-2 hover:bg-black/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Products</Link>
                    <Link to="/services" className="text-base font-medium text-gray-800 p-2 hover:bg-black/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link to="/contact" className="text-base font-medium text-gray-800 p-2 hover:bg-black/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
