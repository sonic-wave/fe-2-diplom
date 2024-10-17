import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Footer from "../../components/Footer/Footer";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import WidgetFilter from "../../components/WidgetFilter/WidgetFilter";
import "./SelectionTrainPage.css";
import SelectionTrain from "../../components/SelectionTrain/SelectionTrain";
import bannerImg from "../../img/banner2.png";

const SelectionTrainPage = () => {
  return (
    <>
      <Header />
      <Banner name={"trains"} link={bannerImg}>
        <SearchForm name={"trains"} />
      </Banner>
      <ProgressBar name={"trains"} step1={"current-step"} />
      <main className="main trains">
        <WidgetFilter />
        <section className="section trains">
          <div className="selection-train">
            <SelectionTrain />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SelectionTrainPage;
