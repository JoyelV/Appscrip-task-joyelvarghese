"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product, ApiProduct } from "@/shared/types/product";
import { filterData } from "@/stores/filterData";

const transformApiProduct = (item: ApiProduct): Product => ({
  ...item,
  inStock: true,
});

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [downArrow, setDownArrow] = useState("/icons/down-arrow-logo.png");
  const [leftArrow, setLeftArrow] = useState("/icons/left-arrow-logo.png");
  const [dropdownCategories, setDropdownCategories] = useState<
    Record<string, boolean>
  >({});
  const [hideFilters, setHideFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const filterSection = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setHideFilters(!hideFilters);
  };

  const showCategoriesHandler = (id: number) => {
    const stringId = id.toString();
    setDownArrow((prev) =>
      prev === "/icons/down-arrow-logo.png"
        ? "/icons/up-arrow-logo.png"
        : "/icons/down-arrow-logo.png"
    );
    setDropdownCategories((prev) => ({
      ...prev,
      [stringId]: !prev[stringId],
    }));
  };

  const hideFilterSection = () => {
    setLeftArrow((prev) =>
      prev === "/icons/left-arrow-logo.png"
        ? "/icons/right-arrow-logo.png"
        : "/icons/left-arrow-logo.png"
    );
    if (filterSection.current) {
      filterSection.current.style.display = hideFilters ? "none" : "block";
    }
  };

  const getProducts = async () => {
    const URL = "https://fakestoreapi.com/products";
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      const productsWithStock = data.map(transformApiProduct);
      setProducts(productsWithStock);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(`Internal Server Error: ${error.message}`);
      } else {
        alert(`Unexpected error: ${error}`);
      }
      setLoading(false);
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
    getProducts();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <main id="filter-bar-top-section">
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <p className="total-products-count d-none-mobile">3425 ITEMS</p>
          <div
            style={{
              display: "flex",
              gap: "6px",
              cursor: "pointer",
              color: "#888792",
            }}
            onClick={() => {
              toggleFilter();
              hideFilterSection();
            }}
          >
            <Image src={leftArrow} alt="Arrow Left" width={16} height={16} />
            <p style={{ textDecoration: "underline" }}>
              {hideFilters ? "SHOW FILTERS" : "HIDE FILTERS"}
            </p>
          </div>
        </div>
        <section
          className="recomended-section"
          style={{
            position: "relative",
            cursor: "pointer",
            paddingRight: "12px",
          }}
        >
          <div className="recomended-head">
            <p>RECOMMENDED</p>
            <Image
              src="/icons/down-arrow-logo.png"
              alt="Arrow Down"
              width={16}
              height={16}
            />
          </div>
          <div className="recomeded-filter-dropdown">
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Image
                src="/icons/tick-mark-logo.png"
                alt="Tick Mark"
                width={26}
                height={26}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                  color: "#252020",
                }}
              >
                RECOMMENDED
              </p>
            </div>
            <div className="recomended-dropdown-items">
              <p>newest first</p>
              <p>popular</p>
              <p>price : high to low</p>
              <p>price : low to high</p>
            </div>
          </div>
        </section>
      </main>

      <main id="products-main-section">
        <aside id="filter-section" ref={filterSection}>
          <div
            className="filter-title"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                height: "26px",
                width: "26px",
                border: "1px solid #4D4D4D",
              }}
            ></div>
            <p>CUSTOMIZE</p>
          </div>
          <hr />
          {filterData &&
            filterData.map((item) => {
              const { id, title } = item;
              return (
                <div className="filter-item" key={id}>
                  <div className="filter-title">
                    <p>{title}</p>
                    <Image
                      src={downArrow}
                      alt="Dropdown Menu Arrow"
                      width={16}
                      height={16}
                      onClick={() => showCategoriesHandler(id)}
                    />
                  </div>
                  <div className="filter-details">
                    <p>All</p>
                  </div>
                  {dropdownCategories[id.toString()] && (
                    <form className="filter-show-form">
                      <div className="filter-show-title">
                        <p>Unselect all</p>
                      </div>
                      <div className="filter-checkboxes">
                        <input type="checkbox" />
                        <label htmlFor="men">Men</label>
                      </div>
                      <div className="filter-checkboxes">
                        <input type="checkbox" />
                        <label htmlFor="women">Women</label>
                      </div>
                      <div className="filter-checkboxes">
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

        <section id="products-all-section">
          {products &&
            products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Products;
