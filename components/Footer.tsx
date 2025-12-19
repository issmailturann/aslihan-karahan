import React from 'react';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FCFBF8] border-t border-gray-200 pt-20 pb-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-20 gap-16 lg:gap-8">
          
          {/* Newsletter Column */}
          <div className="lg:w-1/3 space-y-8">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900">
              Bültenimize Abone Olun
            </h4>
            <div className="relative border-b border-gray-300 pb-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full bg-transparent outline-none text-sm placeholder-gray-400 py-2 font-serif"
              />
              <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-semibold hover:text-gray-500">
                Gönder
              </button>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed max-w-xs">
              Aslıhan Karahan dünyasındaki yeniliklerden, özel etkinliklerden ve online önceliklerden haberdar olmak için kaydolun.
            </p>
            
            <div className="pt-4">
               <button className="text-[10px] uppercase tracking-widest border border-gray-300 px-4 py-2 hover:bg-black hover:text-white transition-colors">
                  Ülke / Dil: Turkey (TR)
               </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900">
                Yardımcı Olabilir Miyiz?
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 font-light tracking-wide">
                <li><a href="#" className="hover:text-black hover:underline">Sipariş Takibi</a></li>
                <li><a href="#" className="hover:text-black hover:underline">İadeler</a></li>
                <li><a href="#" className="hover:text-black hover:underline">İletişim</a></li>
                <li><a href="#" className="hover:text-black hover:underline">SSS</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900">
                Servisler
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 font-light tracking-wide">
                <li><a href="#" className="hover:text-black hover:underline">Kargo Bilgileri</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Ödeme Yöntemleri</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Beden Rehberi</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Mağaza Bul</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900">
                Kurumsal
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 font-light tracking-wide">
                <li><a href="#" className="hover:text-black hover:underline">Maison Hakkında</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Kariyer</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Sürdürülebilirlik</a></li>
              </ul>
            </div>

            {/* Column 4 - Social */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900">
                Bizi Takip Edin
              </h4>
              <div className="flex space-x-4 text-gray-800">
                <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={18} strokeWidth={1} /></a>
                <a href="#" className="hover:opacity-50 transition-opacity"><Facebook size={18} strokeWidth={1} /></a>
                <a href="#" className="hover:opacity-50 transition-opacity"><Youtube size={18} strokeWidth={1} /></a>
                <a href="#" className="hover:opacity-50 transition-opacity"><Twitter size={18} strokeWidth={1} /></a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 tracking-wider uppercase">
          <div className="mb-4 md:mb-0">
            &copy; 2026 Aslıhan Karahan. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-black">Gizlilik Politikası</a>
            <a href="#" className="hover:text-black">Çerez Ayarları</a>
            <a href="#" className="hover:text-black">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
