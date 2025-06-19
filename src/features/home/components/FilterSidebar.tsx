interface FilterSidebarProps {
  show: boolean;
  onToggle: () => void;
}

const FilterSidebar = ({ show, onToggle }: FilterSidebarProps) => {
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
          <input type="checkbox" id="sale-items" />
          <label htmlFor="sale-items">Sale Items</label>
        </li>
        <li>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">Customizable</label>
        </li>
        <li>
          <input type="checkbox" id="ideal-for" />
          <label htmlFor="ideal-for">Ideal For</label>
        </li>
        <li>
          <input type="checkbox" id="occasion" />
          <label htmlFor="occasion">Occasion</label>
        </li>
      </ul>
    </aside>
  );
};

export default FilterSidebar;