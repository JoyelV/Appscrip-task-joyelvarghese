export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  inStock: boolean;
  isOnSale?: boolean; 
  isCustomizable?: boolean; 
}

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}


