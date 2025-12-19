import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const NAV_LINKS: NavLink[] = [
  { label: 'HEDİYELER', href: '#' },
  { label: 'YENİ SEZON', href: '#collection-grid' },
  { label: 'KADIN', href: '#' },
  { label: 'ÇANTA', href: '#' },
  { label: 'AYAKKABI', href: '#' },
  { label: 'AKSESUAR', href: '#' },
  { label: 'HİKAYEMİZ', href: '#' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Black Bar */}
      <div className="bg-black text-white text-[10px] md:text-[11px] tracking-widest font-medium py-2 px-4 md:px-8 flex justify-end items-center z-50 relative">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">YENİ SEZON</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-300 transition-colors">SATIN AL</a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 left-0 w-full z-40 bg-[#FCFBF8] border-b border-gray-100 transition-all duration-500 ${
          isScrolled ? 'py-3 shadow-sm' : 'py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu strokeWidth={1} />
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <a href="/" className={`font-serif tracking-widest text-black transition-all duration-500 block ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
              ASLIHAN KARAHAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-[11px] lg:text-xs tracking-[0.15em] font-medium text-gray-800 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5 md:space-x-8 justify-end text-black">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Search strokeWidth={1} size={20} />
            </button>
            <a href="#" className="hidden md:block hover:scale-110 transition-transform duration-300">
              <User strokeWidth={1} size={20} />
            </a>
            <a href="#" className="relative hover:scale-110 transition-transform duration-300">
              <ShoppingBag strokeWidth={1} size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                0
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FCFBF8] z-50 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-serif text-xl">MENU</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X strokeWidth={1} size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg tracking-widest font-serif italic text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8 border-t border-gray-100 space-y-4">
            <a href="#" className="block text-sm text-gray-500">Hesabım</a>
            <a href="#" className="block text-sm text-gray-500">Favoriler</a>
          </div>
        </nav>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[60] flex flex-col items-center justify-center animate-fade-in">
          <button 
            className="absolute top-8 right-8 text-black"
            onClick={() => setIsSearchOpen(false)}
          >
            <X strokeWidth={1} size={32} />
          </button>
          <div className="w-full max-w-3xl px-6">
            <input 
              type="text" 
              placeholder="ARAMAK İSTEDİĞİNİZ ÜRÜN..." 
              className="w-full bg-transparent border-b-2 border-black text-2xl md:text-4xl font-serif py-4 focus:outline-none placeholder-gray-300 text-center uppercase"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
