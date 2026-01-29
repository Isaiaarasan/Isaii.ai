import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Products from '../components/Products'; // Optional: if you still want it on home, otherwise remove.

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <Services />

        </main>
    );
};

export default Home;
