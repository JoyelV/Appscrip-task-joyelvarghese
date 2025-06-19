import { ApiProduct,Product } from '../types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data: ApiProduct[] = await res.json();
  return data.map((item: ApiProduct) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    inStock: Math.random() > 0.3,
    isOnSale: Math.random() > 0.7, 
    isCustomizable: Math.random() > 0.5, 
  }));
};