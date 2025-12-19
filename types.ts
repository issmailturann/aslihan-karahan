export interface Product {
  id: string;
  title: string;
  handle: string;
  price: number;
  currency: string;
  images: string[];
  tags: string[];
  description?: string;
  availableForSale?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  products: Product[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface EditorialImage {
  src: string;
  alt: string;
  title?: string;
}
