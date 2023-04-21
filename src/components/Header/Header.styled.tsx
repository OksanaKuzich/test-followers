import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ButtonFilter } from "../../components/Filter/Filter.styled";

export const Link = styled(NavLink)`
  font-size: 20px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #5736a3;
    font-weight: 600;
  }

  :hover {
    transform: scale(1.15);
    color: #ebd8ff;
  }
`;

export const HeaderStyle = styled.header`
  border-bottom: 1px solid #5736a3;
  box-shadow: 0 10px 10px -5px rgba(87, 54, 163, 0.3);
  display: flex;
  justify-content: space-between;

  ${ButtonFilter} {
    margin-right: 50px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin: 40px auto 40px 60px;
`;

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;
