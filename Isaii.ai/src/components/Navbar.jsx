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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-3 bg-transparent'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="relative h-16 w-48">
                        <img src="/image.png" alt="Isaii" className="h-full w-full object-contain object-left" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Home</Link>
                    <Link to="/products" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Our Products</Link>
                    <Link to="/services" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Services</Link>
                    <Link to="/contact" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
                    <Link to="/" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Our Products</Link>
                    <Link to="/services" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link to="/contact" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
