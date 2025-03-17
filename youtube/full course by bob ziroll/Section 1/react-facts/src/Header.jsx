function Header({logo}){
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="React Logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">One</li>
          <li className="nav-list-item">Two</li>
          <li className="nav-list-item">Three</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;