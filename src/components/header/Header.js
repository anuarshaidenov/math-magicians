import './header.scss';

const Header = () => (
  <header className="header container">
    <span className="header__logo">Math Magicians</span>
    <nav className="header__nav">
      <ul className="header__links">
        <li>Home</li>
        <li>Calculator</li>
        <li>Quote</li>
      </ul>
    </nav>
  </header>
);

export default Header;
