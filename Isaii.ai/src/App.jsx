import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
