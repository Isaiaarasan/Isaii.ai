import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="/" className="logo">
                    <img src="/image.png" alt="Isaii.ai" />
                    <span>Isaii.ai</span>
                </a>

                <nav className="nav-desktop">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <a href="#contact" className="btn btn-primary">
                    Get Started
                </a>
            </div>
        </header>
    );
};

export default Header;
