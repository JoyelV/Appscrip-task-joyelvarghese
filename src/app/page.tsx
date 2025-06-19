import Navbar from '@/features/home/components/Navbar';
import Header from '@/features/home/components/Header';
import ProductCard from '@/features/home/components/ProductCard';
import { Product } from '@/shared/types/product';
import { fetchProducts } from '@/shared/utils/api';
import Recommendation from '@/features/home/components/Recommendation';

export default async function Home() {
  const products: Product[] = await fetchProducts(); 
  const recommendedProducts = products.slice(0, 3); 

  return (
    <div>
      <Navbar />
      <Header />
      <main className="main-content">
        <Recommendation products={recommendedProducts} />
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}