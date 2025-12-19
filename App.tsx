import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import EditorialStrip from './components/EditorialStrip';
import ProductGrid from './components/ProductGrid';
import SplitEditorial from './components/SplitEditorial';
import FloatingPreview from './components/FloatingPreview';
import { shopifyService } from './services/shopifyService';
import { Collection } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await shopifyService.fetchCollection('frontpage');
        setCollection(data);
      } catch (error) {
        console.error("Failed to fetch collection", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FCFBF8]">
      <Hero />
      
      <div id="editorial-section">
        <EditorialStrip />
      </div>

      <div className="py-16 md:py-24" id="collection-grid">
        <div className="container mx-auto px-6 mb-12 text-center">
           <span className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block">Koleksiyon</span>
           <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900">
             {loading ? 'Yükleniyor...' : 'Yeni Gelenler'}
           </h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <ProductGrid products={collection?.products || []} />
        )}
      </div>

      <SplitEditorial />
      
      <FloatingPreview />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-[#111] antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<HomePage />} /> {/* Reusing Home for demo */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
