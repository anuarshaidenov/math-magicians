import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <header className="header container">
    <span className="header__logo">Math Magicians</span>
    <nav className="header__nav">
      <ul className="header__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
