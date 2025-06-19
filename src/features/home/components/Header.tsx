"use client"
import { useState } from 'react';
import FilterSidebar from './FilterSidebar';

const Header = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <header className="header">
      <h1>Discover Our Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere honoris.</p>
      <button onClick={toggleFilters} className="filter-toggle">
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      <FilterSidebar show={showFilters} onToggle={toggleFilters} />
    </header>
  );
};

export default Header;