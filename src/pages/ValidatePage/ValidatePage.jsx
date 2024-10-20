import "./ValidatePage.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SearchForm from "../../components/SearchForm/SearchForm";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import WidgetDetails from "../../components/WidgetDetails/WidgetDetails";
import Footer from "../../components/Footer/Footer";
import TrainCard from "../../components/TrainCard/TrainCard";
import ValidatePassangers from "../../components/ValidatePassangers/ValidatePassangers";
import ValidatePayment from "../../components/ValidatePayment/ValidatePayment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../img/banner2.png";

const ValidatePage = () => {
  const { train } = useSelector((state) => state.trainSeat);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/success");
  };

  return (
    <>
      <Header />
      <Banner name={"trains"} link={bannerImg}>
        <SearchForm name={"trains"} />
      </Banner>
      <ProgressBar
        name={"trains"}
        step1={"current-step"}
        step2={"current-step"}
        step3={"current-step"}
        step4={"current-step"}
      />
      <main className="main validate">
        <WidgetDetails />
        <section className="section validate">
          <div className="validate-forms">
            <div className="validate-form-head train">
              <h3 className="form-title train">Поезд</h3>
            </div>
            <TrainCard
              card={train}
              key={train.departure?._id}
              order={"order"}
            />
            <ValidatePassangers />
            <ValidatePayment />
          </div>
          <div className="validate-button">
            <button onClick={onClick}>Подтвердить</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ValidatePage;
