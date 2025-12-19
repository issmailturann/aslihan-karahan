import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[calc(100vh-100px)] md:h-screen overflow-hidden group">
        {/* Background Image / Placeholder for video */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Campaign" 
            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
          <h2 className="text-xs md:text-sm tracking-[0.3em] font-medium mb-4 uppercase drop-shadow-md">
            Spring Summer 2026
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic mb-8 drop-shadow-lg tracking-tight">
            The Essence
          </h1>
          
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="flex items-center space-x-3 group cursor-pointer backdrop-blur-sm bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full border border-white/30 transition-all duration-300"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={12} fill="currentColor" className="ml-0.5" />
            </div>
            <span className="uppercase text-[10px] md:text-xs tracking-widest font-semibold">
              Filmi İzle
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 p-2"
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="w-full h-full max-w-7xl max-h-[90vh] aspect-video relative">
            {/* Using an iframe for demo, normally would be <video> tag */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=0&loop=1&playlist=dQw4w9WgXcQ" 
              title="Campaign Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
