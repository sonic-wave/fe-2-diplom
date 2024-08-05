import "./MainHeader.css";
import { Nav } from "../Nav/Nav";
import { SearchBox } from "../SearchBox/SearchBox";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";

export const MainHeader = () => {
  return (
    <header className="header">
      <div className="header-content">
        <HeaderLogo />
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
