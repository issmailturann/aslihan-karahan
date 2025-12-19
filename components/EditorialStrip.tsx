import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=1632&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1476&auto=format&fit=crop"
];

const EditorialStrip: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FCFBF8]">
      {/* Container for scroll snap on mobile */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 gap-4 px-4 md:px-12 w-full">
        {IMAGES.map((src, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center">
            <div className="aspect-[3/4] overflow-hidden relative group">
              <img 
                src={src} 
                alt={`Editorial look ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xl md:text-2xl font-serif italic text-gray-800 tracking-wide">
          "Zarafetin modern yorumu: Yeni Sezon"
        </p>
      </div>
    </section>
  );
};

export default EditorialStrip;
