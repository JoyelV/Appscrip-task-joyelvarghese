export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  inStock: boolean;
  isOnSale?: boolean; 
  isCustomizable?: boolean; 
}