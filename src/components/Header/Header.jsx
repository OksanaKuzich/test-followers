import { HeaderStyle, Link, NavList, NavItem } from './Header.styled';

export const Header = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'tweets', text: 'Tweets' },
  ];

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
    </HeaderStyle>
  );
};
