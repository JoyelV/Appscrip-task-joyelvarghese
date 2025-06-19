import { Product } from '../types/product';
import { ApiProduct } from '../types/apiProduct';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data: ApiProduct[] = await res.json();
  return data.map((item: ApiProduct) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    inStock: Math.random() > 0.3, // Randomly set inStock for demo
  }));
};