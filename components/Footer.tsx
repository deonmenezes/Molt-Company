import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pop-yellow pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="border-b-4 border-black pb-12 mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8">
            If you are reading this,<br />
            <span className="bg-white border-black border-2 px-3 shadow-[4px_4px_0px_black] inline-block transform rotate-1 mt-4 py-1">
              You are already ahead.
            </span>
          </h2>
          <Button variant="dark" size="lg" href="#">Start Scaling Now</Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-bold mb-12">
          {[
            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
            { title: "Resources", links: ["Community", "Help Center", "Partners", "Status"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] }
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-headings text-xl mb-4 uppercase border-b-2 border-black inline-block pb-1">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="hover:underline hover:text-gray-800 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
             <div className="bg-white border-3 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-6">
                <span className="text-2xl leading-none block" role="img" aria-label="lobster">🦞</span>
             </div>
             <div className="font-headings font-bold text-3xl uppercase tracking-tighter">Molt Company</div>
          </div>
          <div className="text-sm font-bold">© 2023 Molt Company Inc. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Placeholders */}
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 bg-black hover:bg-white hover:border-2 hover:border-black cursor-pointer transition-colors"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};