'use client'; 

import { useEffect, useState } from 'react';
import Navbar from '@/features/home/components/Navbar';
import Header from '@/features/home/components/Header';
import ProductCard from '@/features/home/components/ProductCard';
import { Product } from '@/shared/types/product';
import { fetchProducts } from '@/shared/utils/api';
import Recommendation from '@/features/home/components/Recommendation';

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
      setFilteredProducts(products);
      setRecommendedProducts(products.slice(0, 3));
    };
    fetchData();
  }, []);

  const filterProducts = (filters: { [key: string]: boolean }) => {
    return allProducts.filter((product) => {
      const saleMatch = !filters.saleItems || (filters.saleItems && product.isOnSale);
      const customizableMatch = !filters.customizable || (filters.customizable && product.isCustomizable);
      const idealForMatch = !filters.idealFor; 
      const occasionMatch = !filters.occasion; 
      return saleMatch && customizableMatch && idealForMatch && occasionMatch;
    });
  };

  const handleFilterChange = (filters: { [key: string]: boolean }) => {
    setFilteredProducts(filterProducts(filters));
  };

  return (
    <div>
      <Navbar />
      <Header onFilterChange={handleFilterChange} />
      <main className="main-content">
        <Recommendation products={recommendedProducts} />
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}