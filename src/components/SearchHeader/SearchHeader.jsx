import "./SearchHeader.css";
import { Nav } from "../Nav/Nav";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";

export const SearchHeader = () => {
  return (
    <header className="search-header">
      <div className="search-header-content">
        <HeaderLogo />
        <Nav></Nav>
      </div>
    </header>
  );
};
