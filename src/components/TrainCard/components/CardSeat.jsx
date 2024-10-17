import Seat from "./Seat";
import optionIcon1 from "../../../img/train-card/option.png";
import optionIcon2 from "../../../img/train-card/option-2.png";
import optionIcon3 from "../../../img/train-card/option-3.png";

const CardSeat = ({
  availableSeats,
  priceDep,
  priceArr,
  conditioner,
  wifi,
  express,
  onClick,
  order,
}) => {
  return (
    <div className="card-seats">
      {availableSeats?.fourth && (
        <Seat
          priceDep={priceDep?.fourth}
          priceArr={priceArr?.fourth}
          name={"Сидячий"}
          seat={availableSeats?.fourth}
        />
      )}
      {availableSeats?.second && (
        <Seat
          priceDep={priceDep?.second}
          priceArr={priceArr?.second}
          name={"Купе"}
          seat={availableSeats?.second}
        />
      )}
      {availableSeats?.third && (
        <Seat
          priceDep={priceDep?.third}
          priceArr={priceArr?.third}
          name={"Плацкарт"}
          seat={availableSeats?.third}
        />
      )}
      {availableSeats?.first && (
        <Seat
          priceDep={priceDep?.first}
          priceArr={priceArr?.first}
          name={"Люкс"}
          seat={availableSeats?.first}
        />
      )}
      <div className="card-options">
        {conditioner && (
          <img src={optionIcon1} alt="conditioner" className="card-option" />
        )}
        {wifi && <img src={optionIcon3} alt="wifi" className="card-option" />}
        {express && (
          <img src={optionIcon2} alt="express" className="card-option" />
        )}
      </div>
      <div className="card-button">
        {order ? (
          <button className="choice-seat order" onClick={onClick}>
            Изменить
          </button>
        ) : (
          <button className="choice-seat" onClick={onClick}>
            Выбрать места
          </button>
        )}
      </div>
    </div>
  );
};

export default CardSeat;
