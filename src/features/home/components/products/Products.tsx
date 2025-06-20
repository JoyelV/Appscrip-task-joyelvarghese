'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { Product } from '@/shared/types/product';
import { filterData } from '@/stores/filterData';
import styles from './styles/Products.module.css';

const Products = ({ initialProducts }: { initialProducts: Product[] }) => {
  const [downArrow, setDownArrow] = useState('/icons/down-arrow-logo.png');
  const [leftArrow, setLeftArrow] = useState('/icons/left-arrow-logo.png');
  const [dropdownCategories, setDropdownCategories] = useState<Record<string, boolean>>({});
  const [hideFilters, setHideFilters] = useState(false);
  const filterSection = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setHideFilters(!hideFilters);
  };

  const showCategoriesHandler = (id: number) => {
    const stringId = id.toString();
    setDownArrow((prev) =>
      prev === '/icons/down-arrow-logo.png'
        ? '/icons/up-arrow-logo.png'
        : '/icons/down-arrow-logo.png'
    );
    setDropdownCategories((prev) => ({
      ...prev,
      [stringId]: !prev[stringId],
    }));
  };

  const hideFilterSection = () => {
    setLeftArrow((prev) =>
      prev === '/icons/left-arrow-logo.png'
        ? '/icons/right-arrow-logo.png'
        : '/icons/left-arrow-logo.png'
    );
    if (filterSection.current) {
      filterSection.current.style.display = hideFilters ? 'none' : 'block';
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setHideFilters(true);
    } else {
      setHideFilters(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <>
      <main id="filter-bar-top-section" className={styles.filterBarTopSection}>
        <div className={styles.filterToggle}>
          <p className={`${styles.totalProductsCount} d-none-mobile`}>3425 ITEMS</p>
          <div
            onClick={() => {
              toggleFilter();
              hideFilterSection();
            }}
          >
            <Image src={leftArrow} alt="Arrow Left" width={16} height={16} />
            <p className={styles.filterToggleText}>{hideFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}</p>
          </div>
        </div>
        <section
          className={`${styles.recomendedSection}`}
        >
          <div className={styles.recomendedHead}>
            <p>RECOMMENDED</p>
            <Image
              src="/icons/down-arrow-logo.png"
              alt="Arrow Down"
              width={16}
              height={16}
            />
          </div>
          <div className={styles.recomededFilterDropdown}>
            <div className={styles.recomendedDropdownHeader}>
              <Image
                src="/icons/tick-mark-logo.png"
                alt="Tick Mark"
                width={26}
                height={26}
              />
              <p className={styles.recomendedDropdownHeaderText}>RECOMMENDED</p>
            </div>
            <div className={styles.recomendedDropdownItems}>
              <p>newest first</p>
              <p>popular</p>
              <p>price : high to low</p>
              <p>price : low to high</p>
            </div>
          </div>
        </section>
      </main>

      <main id="products-main-section" className={styles.productsMainSection}>
        <aside id="filter-section" ref={filterSection} className={styles.filterSection}>
          <div className={styles.filterTitle}>
            <div className={styles.filterTitleBox}></div>
            <p>CUSTOMIZE</p>
          </div>
          <hr />
          {filterData &&
            filterData.map((item) => {
              const { id, title } = item;
              return (
                <div className={styles.filterItem} key={id}>
                  <div className={styles.filterTitle}>
                    <p>{title}</p>
                    <Image
                      src={downArrow}
                      alt="Dropdown Menu Arrow"
                      width={16}
                      height={16}
                      onClick={() => showCategoriesHandler(id)}
                    />
                  </div>
                  <div className={styles.filterDetails}>
                    <p>All</p>
                  </div>
                  {dropdownCategories[id.toString()] && (
                    <form className={styles.filterForm}>
                      <div className={styles.filterShowTitle}>
                        <p>Unselect all</p>
                      </div>
                      <div className={styles.filterCheckboxes}>
                        <input type="checkbox" />
                        <label htmlFor="men">Men</label>
                      </div>
                      <div className={styles.filterCheckboxes}>
                        <input type="checkbox" />
                        <label htmlFor="women">Women</label>
                      </div>
                      <div className={styles.filterCheckboxes}>
                        <input type="checkbox" />
                        <label htmlFor="boys&kids">Boys & Kids</label>
                      </div>
                    </form>
                  )}
                  <hr />
                </div>
              );
            })}
        </aside>

        <section id="products-all-section" className={styles.productsAllSection}>
          {initialProducts &&
            initialProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Products;