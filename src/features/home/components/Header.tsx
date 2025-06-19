"use client"
import { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';

const Header = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  useEffect(() => {
    const sidebar = document.querySelector('.filter-sidebar') as HTMLElement | null;
    if (sidebar) {
      if (showFilters) {
        sidebar.classList.add('show');
      } else {
        sidebar.classList.remove('show');
      }
    }
  }, [showFilters]);

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