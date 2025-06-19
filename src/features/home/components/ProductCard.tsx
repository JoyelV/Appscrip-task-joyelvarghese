import Image from 'next/image';
import { Product } from '@/shared/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <span className="product-stock">
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
      <button className="product-button">Sign up to see pricing</button>
    </div>
  );
};

export default ProductCard;