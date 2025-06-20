import Title from '@/features/home/components/title/Title';
import Products from '@/features/home/components/products/Products';
import { Product, ApiProduct } from '@/shared/types/product';

const transformApiProduct = (item: ApiProduct): Product => ({
  ...item,
  inStock: true,
});

export default async function Home() {
  const URL = "https://fakestoreapi.com/products";
  const response = await fetch(URL, { cache: 'no-store' }); 
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  const initialProducts = data.map(transformApiProduct);

  return (
    <>
      <Title />
      <Products initialProducts={initialProducts} />
    </>
  );
}