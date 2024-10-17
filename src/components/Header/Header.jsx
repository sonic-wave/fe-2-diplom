import Link from "./Link";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-navigation">
        <div className="header-navigation_logo">
          <a href="/" className="logo-link">
            <p className="logo-img">Лого</p>
          </a>
        </div>
        <div className="header-navigation_list">
          <ul className="navigation_list-items">
            <Link link="/#about" title="О нас" />
            <Link link="/#hiw" title="Как это работает" />
            <Link link="/#feedback" title="Отзывы" />
            <Link link="/#footer" title="Контакты" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
