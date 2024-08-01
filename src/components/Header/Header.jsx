import "./Header.css";
import { Nav } from "../Nav/Nav";
import { SearchBox } from "../SearchBox/SearchBox";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-container">
          <div className="header-logo">Лого</div>
        </div>
        <Nav></Nav>
        <div className="header-container">
          <h1 className="header-title">
            Вся жизнь - <span className="header-title-span">путешествие!</span>
          </h1>
          <SearchBox />
        </div>
      </div>
      <div className="header-line"></div>
    </header>
  );
};
