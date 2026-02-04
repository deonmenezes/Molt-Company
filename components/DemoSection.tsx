import React from 'react';
import { Play } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <section className="bg-white border-b-4 border-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase leading-none">
          Watch Your AI Team Work
        </h2>
        <p className="text-xl md:text-2xl font-bold mb-12 max-w-3xl mx-auto">
          Click through this 3 min interactive demo to see what your AI team can do
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="aspect-video bg-gray-200 border-3 border-black shadow-pop flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors">
              <div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center border-2 border-black shadow-sm group-hover:scale-110 transition-transform">
                <Play className="ml-1 text-black fill-current" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};