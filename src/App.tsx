import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveBackend } from './components/InteractiveBackend';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="bg-bg-dark min-h-screen selection:bg-primary/30 selection:text-white">
            <Navigation />
            <Hero />
            <HowItWorks />
            <InteractiveBackend />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
