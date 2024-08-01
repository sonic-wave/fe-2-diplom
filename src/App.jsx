import "./App.css";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
      </div>
      <Info />
    </>
  );
}

export default App;
