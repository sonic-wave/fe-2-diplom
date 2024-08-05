import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from "./components/MainPage/MainPage";
import { SearchPage } from "./components/SearchPage/SearchPage";


function App() {
  return (
    <>
      <Router basename='/fe-2-diplom'>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          {/* <Route path="/catalog" exact element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CatalogItem />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contacts" exact element={<Contacts />} /> */}
          <Route path="/searchpage" exact element={<SearchPage />} />
          {/* <Route path="/cart" exact element={<Cart />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
