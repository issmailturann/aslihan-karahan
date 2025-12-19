import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const FloatingPreview: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end animate-fade-in-up">
      <button 
        onClick={scrollToTop}
        className="mb-4 bg-white/80 backdrop-blur-md p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors duration-300 shadow-sm"
      >
        <ChevronUp size={20} strokeWidth={1.5} />
      </button>

      <div className="hidden md:block w-32 aspect-[3/4] bg-white border border-white shadow-xl overflow-hidden cursor-pointer group relative" onClick={scrollToTop}>
        <img 
          src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1697&auto=format&fit=crop" 
          alt="Preview" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                Keşfet
            </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingPreview;
