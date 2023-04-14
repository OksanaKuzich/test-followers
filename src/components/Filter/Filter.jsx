import { FilterList, ButtonFilter } from "./Filter.styled";

export const Filter = () => {
  const filterBtn = [
    {
      text: "show all",
    },
    {
      text: "follow",
    },
    {
      text: "followings",
    },
  ];

  return (
    <FilterList>
      {filterBtn.map(btn => (
        <li key={btn.text}>
          <ButtonFilter type="button">{btn.text}</ButtonFilter>
        </li>
      ))}
    </FilterList>
  );
};
