import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-pop-yellow border-3 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-6 transition-transform hover:rotate-12 cursor-pointer">
               <span className="text-3xl leading-none block" role="img" aria-label="lobster">🦞</span>
            </div>
            <a href="#" className="font-headings font-bold text-3xl tracking-tighter text-black uppercase">
              Molt Company
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Demo', 'Pricing', 'Learn', 'Shop'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-black hover:bg-pop-yellow hover:border-black hover:border-2 px-2 py-1 font-bold text-lg transition-all border-2 border-transparent uppercase"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-black font-bold text-lg hover:underline uppercase">
              Log In
            </a>
            <Button href="#">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:bg-pop-yellow p-1 border-2 border-transparent hover:border-black focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black absolute w-full left-0 shadow-pop">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Demo', 'Pricing', 'Learn', 'Shop'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-black hover:bg-pop-yellow hover:border-black border-2 border-transparent px-3 py-2 text-xl font-bold font-headings uppercase"
              >
                {item}
              </a>
            ))}
            <a href="#" className="block text-black hover:underline px-3 py-2 text-xl font-bold font-headings uppercase">
              Log In
            </a>
            <div className="p-3">
               <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};