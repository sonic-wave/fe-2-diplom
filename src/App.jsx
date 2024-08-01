import "./App.css";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Reviews } from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
      </div>
      <Info />
      <Reviews />
    </>
  );
}

export default App;
