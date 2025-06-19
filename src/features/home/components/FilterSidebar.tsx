import { useState } from 'react';

interface FilterSidebarProps {
  show: boolean;
  onToggle: () => void;
  onFilterChange: (filters: { [key: string]: boolean }) => void;
}

const FilterSidebar = ({ show, onToggle, onFilterChange }: FilterSidebarProps) => {
  const [filters, setFilters] = useState({
    saleItems: false,
    customizable: false,
    idealFor: false,
    occasion: false,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    const newFilters = { ...filters, [id]: checked };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  if (!show) return null;

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2>Filters</h2>
        <button onClick={onToggle} className="close-filter">
          ×
        </button>
      </div>
      <ul className="filter-options">
        <li>
          <input
            type="checkbox"
            id="saleItems"
            checked={filters.saleItems}
            onChange={handleFilterChange}
          />
          <label htmlFor="saleItems">Sale Items</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="customizable"
            checked={filters.customizable}
            onChange={handleFilterChange}
          />
          <label htmlFor="customizable">Customizable</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="idealFor"
            checked={filters.idealFor}
            onChange={handleFilterChange}
          />
          <label htmlFor="idealFor">Ideal For</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="occasion"
            checked={filters.occasion}
            onChange={handleFilterChange}
          />
          <label htmlFor="occasion">Occasion</label>
        </li>
      </ul>
    </aside>
  );
};

export default FilterSidebar;