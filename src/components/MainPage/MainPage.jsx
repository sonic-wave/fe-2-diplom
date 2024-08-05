import { MainHeader } from "../MainHeader/MainHeader";
import { About } from "../About/About";
import { Info } from "../Info/Info";
import { Reviews } from "../Reviews/Reviews";
import { Footer } from "../Footer/Footer";

export const MainPage = () => {
  return (
    <>
      <MainHeader />
      <About />
      <Info />
      <Reviews />
      <Footer />
    </>
  );
};
