import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "./data";
import { ButtonFilter } from "../../components/Filter/Filter.styled";
import { HeaderStyle, Link, NavList, NavItem } from "./Header.styled";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickBack = (): void => {
    navigate("/", { replace: true });
  };

  return (
    <HeaderStyle>
      <nav>
        <NavList>
          {navItems.map(({ href, text }) => (
            <NavItem key={href}>
              <Link to={href} key={href}>
                {text}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </nav>
      {location.pathname === "/tweets" && (
        <ButtonFilter type="button" onClick={handleClickBack}>
          Back
        </ButtonFilter>
      )}
    </HeaderStyle>
  );
};
