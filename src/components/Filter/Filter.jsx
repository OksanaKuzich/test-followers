import { filterBtn } from "./data";
import { FilterList, ButtonFilter } from "./Filter.styled";

export const Filter = ({ setBtnFilter, btnFilter }) => {
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
            disabled={btn.text === btnFilter ? true : false}
            style={{
              backgroundColor: btn.text === btnFilter ? "#fff" : "#ebd8ff",
              border: btn.text === btnFilter ? "2px solid #5736a3" : "none",
            }}
          >
            {btn.text}
          </ButtonFilter>
        </li>
      ))}
    </FilterList>
  );
};
