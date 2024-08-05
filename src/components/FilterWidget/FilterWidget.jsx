import "./FilterWidget.css";
import kupeIcon from "../../public/svg/kupe-icon.svg";
import platscartIcon from "../../public/svg/platscart-icon.svg";
import seatIcon from "../../public/svg/seat-icon.svg";
import luxeIcon from "../../public/svg/luxe-icon.svg";
import wifiIcon from "../../public/svg/wi-fi-icon.svg";
import expressIcon from "../../public/svg/express-icon.svg";

export const FilterWidget = () => {

  return (
    <div className="filterWidget-container">
      <div className="filter-inputContainer">
        <h3 className="filter-title">Дата поездки</h3>
        <input type="date" className="filter-dateTo-input" />
        <h3 className="filter-title">Дата поездки</h3>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-line"></div>
      <div className="filter-seatType">
        <img src={kupeIcon} alt="kupeIcon" className="filter-seatType-icon" />
        <div className="filter-seatType-title">Купе</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-seatType">
        <img
          src={platscartIcon}
          alt="platscartIcon"
          className="filter-seatType-icon"
        />
        <div className="filter-seatType-title">Плацкарт</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-seatType">
        <img src={seatIcon} alt="seatIcon" className="filter-seatType-icon" />
        <div className="filter-seatType-title">Сидячий</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-seatType">
        <img src={luxeIcon} alt="luxeIcon" className="filter-seatType-icon" />
        <div className="filter-seatType-title">Люкс</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-seatType">
        <img src={wifiIcon} alt="wifiIcon" className="filter-seatType-icon" />
        <div className="filter-seatType-title">Wi-Fi</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-seatType">
        <img
          src={expressIcon}
          alt="expressIcon"
          className="filter-seatType-icon"
        />
        <div className="filter-seatType-title">Экспресс</div>
        <label class="custom-radio">
          <input type="checkbox" name="option" value="2" />
          <span class="custom-radio-button"></span>
        </label>
      </div>
      <div className="filter-line"></div>
      <h3 className="filter-title">Стоимость</h3>
      <div className="slider-container">
        <div className="slider-label">
          <span id="min-value">0</span>
          <span id="max-value">100</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value="25"
          id="slider-1"
          className="slider"
          oninput="updateSlider()"
        />
        <input
          type="range"
          min="0"
          max="100"
          value="75"
          id="slider-2"
          className="slider"
          oninput="updateSlider()"
        />
        <div className="range-track" id="range-track"></div>
        <div className="slider-label">
          <span id="range-value-1">25</span>
          <span id="range-value-2">75</span>
        </div>
      </div>
    </div>
  );
};
