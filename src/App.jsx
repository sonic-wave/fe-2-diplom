import "./App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
