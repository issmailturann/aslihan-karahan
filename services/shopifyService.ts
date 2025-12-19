import { Product, Collection } from '../types';

// Mock Data simulating Shopify Response
const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    title: 'VLOGO İMZALI İPEK GÖMLEK',
    handle: 'silk-shirt-vlogo',
    price: 12500,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1663&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589363355025-a1c1d094f06f?q=80&w=1587&auto=format&fit=crop'
    ],
    tags: ['New Arrival', 'Giyim'],
    availableForSale: true
  },
  {
    id: 'prod_2',
    title: 'KRİSTAL İŞLEMELİ ÇANTA',
    handle: 'crystal-bag',
    price: 45000,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1635&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874102752-16327383a17e?q=80&w=1587&auto=format&fit=crop'
    ],
    tags: ['New Arrival', 'Çanta'],
    availableForSale: true
  },
  {
    id: 'prod_3',
    title: 'ROMAN STUD TOPUKLU AYAKKABI',
    handle: 'roman-stud-heels',
    price: 28900,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=1626&auto=format&fit=crop'
    ],
    tags: ['Ayakkabı'],
    availableForSale: true
  },
  {
    id: 'prod_4',
    title: 'OVERSIZED YÜN CEKET',
    handle: 'oversized-wool-coat',
    price: 62000,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1587&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1634&auto=format&fit=crop'
    ],
    tags: ['New Arrival', 'Dış Giyim'],
    availableForSale: true
  },
  {
    id: 'prod_5',
    title: 'ALTIN DETAYLI KOLYE',
    handle: 'gold-detail-necklace',
    price: 15400,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1587&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1587&auto=format&fit=crop'
    ],
    tags: ['Aksesuar'],
    availableForSale: true
  },
  {
    id: 'prod_6',
    title: 'DANTEL DETAYLI MİDİ ELBİSE',
    handle: 'lace-midi-dress',
    price: 85000,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1683&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1646&auto=format&fit=crop'
    ],
    tags: ['Giyim'],
    availableForSale: true
  },
  {
    id: 'prod_7',
    title: 'DERİ MİNİ ETEK',
    handle: 'leather-mini-skirt',
    price: 24500,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1582142407894-ec85f1260a46?q=80&w=1587&auto=format&fit=crop'
    ],
    tags: ['Giyim'],
    availableForSale: true
  },
  {
    id: 'prod_8',
    title: 'SIGNATURE GÜNEŞ GÖZLÜĞÜ',
    handle: 'signature-sunglasses',
    price: 18200,
    currency: 'TRY',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1760&auto=format&fit=crop'
    ],
    tags: ['Aksesuar', 'New Arrival'],
    availableForSale: true
  }
];

export const shopifyService = {
  fetchCollection: async (handle: string = 'new-arrivals'): Promise<Collection> => {
    // Simulate API network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: 'col_1',
      title: 'Spring Summer 2026',
      handle: handle,
      description: 'The new collection explores the duality of modern elegance.',
      products: MOCK_PRODUCTS
    };
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (!query) return [];
    return MOCK_PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }
};
