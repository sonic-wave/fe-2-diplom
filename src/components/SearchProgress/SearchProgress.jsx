import "./SearchProgress.css";
import progressArrow from "../../public/svg/progressArrow.svg";
import progressArrowActive from "../../public/svg/progressArrowActive.svg";
import { useState } from "react";

export const SearchProgress = () => {
  const [passengersActive, setPassengersActive] = useState(true);
  const [paymentActive, setPaymentActive] = useState(false);
  const [checkActive, setCheckActive] = useState(false);

  return (
    <div className="progress">
      {passengersActive ? (
        <div className="progress-bar active">
          <span className="progress-bar-number">1</span>
          <span className="progress-bar-text">Билеты</span>
          <img
            src={progressArrowActive}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </div>
      ) : (
        <>
          <div className="progress-bar active">
            <span className="progress-bar-number">1</span>
            <span className="progress-bar-text">Билеты</span>
          </div>
          <img
            src={progressArrowActive}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </>
      )}
      {passengersActive ? (
        <div className="progress-bar active">
          <span className="progress-bar-number">2</span>
          <span className="progress-bar-text">Пассажиры</span>
          <img
            src={progressArrowActive}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </div>
      ) : (
        <>
          <div className="progress-bar">
            <span className="progress-bar-number">2</span>
            <span className="progress-bar-text">Пассажиры</span>
          </div>
          <img
            src={progressArrow}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </>
      )}
      {paymentActive ? (
        <div className="progress-bar active">
          <span className="progress-bar-number">3</span>
          <span className="progress-bar-text">Оплата</span>
          <img
            src={progressArrowActive}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </div>
      ) : (
        <>
          <div className="progress-bar">
            <span className="progress-bar-number">3</span>
            <span className="progress-bar-text">Оплата</span>
          </div>
          <img
            src={progressArrow}
            alt="progress-icon"
            className="progress-bar-arrow"
          />
        </>
      )}
      {checkActive ? (
        <div className="progress-bar active">
          <span className="progress-bar-number">4</span>
          <span className="progress-bar-text">Проверка</span>
        </div>
      ) : (
        <div className="progress-bar">
          <span className="progress-bar-number">4</span>
          <span className="progress-bar-text">Проверка</span>
        </div>
      )}
    </div>
  );
};
