import { filterBtn } from "./data";
import { FilterList, ButtonFilter } from "./Filter.styled";

export const Filter = ({ setBtnFilter }) => {
  const handleFilterBtn = e => {
    setBtnFilter(e.target.dataset.filter);
  };

  return (
    <FilterList>
      {filterBtn.map(btn => (
        <li key={btn.text}>
          <ButtonFilter
            type="button"
            onClick={handleFilterBtn}
            data-filter={btn.text}
          >
            {btn.text}
          </ButtonFilter>
        </li>
      ))}
    </FilterList>
  );
};
