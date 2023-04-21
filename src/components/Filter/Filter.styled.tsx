import styled from "styled-components";

export const FilterList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

export const ButtonFilter = styled.button`
  margin-top: 26px;
  width: 120px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-weight: 600;
  color: #373737;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #fff;
    border: 2px solid #5736a3;
  }
`;
