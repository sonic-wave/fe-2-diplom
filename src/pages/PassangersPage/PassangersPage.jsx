import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./PassangersPage.css";
import WidgetDetails from "../../components/WidgetDetails/WidgetDetails";
import PassangerCard from "../../components/PassangerCard/PassangerCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../img/banner2.png";

const PassangersPage = () => {
  const { departure, arrival } = useSelector((state) => state.seats.passanger);
  const { passanger } = useSelector((state) => state.passanger);
  const navigate = useNavigate();
  // const [addComponents, setAddComponents] = useState([]);

  const onClick = () => {
    navigate("/payment");
  };

  return (
    <>
      <Header />
      <Banner name={"pass"} link={bannerImg}>
        <SearchForm name={"trains"} />
      </Banner>
      <ProgressBar
        name={"trains"}
        step1={"current-step"}
        step2={"current-step"}
      />
      <main className="main pass">
        <WidgetDetails />
        <section className="section pass">
          {departure.adult > 0 && (
            <PassangerCard name={"adult"} show count={departure.adult} />
          )}
          {departure.child > 0 && (
            <PassangerCard name={"child"} show count={departure.child} />
          )}
          {arrival.adult > 0 && <PassangerCard name={"adult"} show />}
          {arrival.child > 0 && <PassangerCard name={"child"} show />}
          {/* {addComponents.map((el) => (
            <PassangerCard show />
          ))} */}
          <div className="add-passanger">
            <button className="add-passanger-button">Добавить пассажира</button>
          </div>
          <div className="next-passanger">
            <div
              className={
                passanger.length
                  ? "next-passanger-button active"
                  : "next-passanger-button"
              }
              onClick={onClick}
            >
              Далее
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PassangersPage;
