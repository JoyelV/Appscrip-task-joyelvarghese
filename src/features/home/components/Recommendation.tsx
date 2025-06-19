import { Product } from '@/shared/types/product';
import ProductCard from './ProductCard';

interface RecommendationProps {
  products: Product[];
}

const Recommendation = ({ products }: RecommendationProps) => {
  return (
    <aside className="recommendation">
      <h2 className="recommendation-title">Recommended</h2>
      <div className="recommendation-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </aside>
  );
};

export default Recommendation;