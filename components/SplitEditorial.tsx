import React from 'react';

const SplitEditorial: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[80vh] w-full">
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-[#F4F3F0] flex flex-col justify-center items-center p-12 md:p-24 text-center order-2 md:order-1">
        <h3 className="text-xs font-bold tracking-[0.25em] mb-6 text-gray-400 uppercase">
          Koleksiyonlar
        </h3>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 text-gray-900">
          Aslıhan Karahan
        </h2>
        <p className="text-2xl md:text-3xl font-serif italic text-gray-600 mb-12">
          Cruise 2026
        </p>

        <div className="flex flex-col space-y-4">
          <a href="#" className="text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-gray-600 transition-colors">
            Kadın Koleksiyonunu Keşfet
          </a>
          <a href="#" className="text-xs tracking-[0.2em] uppercase border-b border-transparent pb-1 hover:border-black transition-all">
            Erkek Koleksiyonunu Keşfet
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 h-[60vh] md:h-auto overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1549575913-728b7e735d46?q=80&w=1956&auto=format&fit=crop" 
          alt="Cruise Campaign" 
          className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110 ease-linear"
        />
      </div>
    </section>
  );
};

export default SplitEditorial;
