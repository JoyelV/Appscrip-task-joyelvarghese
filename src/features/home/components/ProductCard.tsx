'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProduct {
  id: number;
  image: string;
  price: number;
  title: string;
}

interface ProductCardProps {
  product: ProductCardProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section key={product.id}>
      <div className="product-container">
        <div>
          <Image src={product.image} alt={product.title} width={265} height={356} className="product-image" />
          <p className="product-name">{product.title}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="account-creation-info">
            <p>
              <a href="#" style={{ textDecoration: 'underline', color: '#888792' }}>
                Sign in
              </a>{' '}
              or Create an account to see pricing
            </p>
            <Image
              src="/icons/heart-logo.png"
              alt="Like Icon"
              width={24}
              height={24}
              onClick={handleLikeToggle}
              style={{ cursor: 'pointer', opacity: isLiked ? 1 : 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;