import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { TeamGrid } from './components/TeamGrid';
import { DemoSection } from './components/DemoSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased overflow-x-hidden bg-white text-black selection:bg-pop-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TeamGrid />
        <DemoSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;