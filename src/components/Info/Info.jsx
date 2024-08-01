import "./Info.css";
import displayImage from '../../public/img/display.png';
import buildingImage from '../../public/svg/building.svg';
import internetImage from '../../public/svg/internet.svg';

export const Info = () => {
    const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section className="info-section">
      <div className="info-section-container">
        <div className="info-titleContainer">
          <h2 className="info-title">Как это работает</h2>
          <button className="info-btn">Узнать больше</button>
        </div>
        <div className="info-icons">
          <img
            // src={`${import.meta.env.BASE_URL}/img/display.png`}
            src={displayImage}
            alt="display"
            className="info-icon"
          />
          <img
            src={buildingImage}
            alt="building"
            className="info-icon"
          />
          <img
            src={internetImage}
            alt="internet"
            className="info-icon"
          />
        </div>
        <div className="info-iconsTitles">
          <span className="info-icon-title">Удобный заказ на сайте</span>
          <span className="info-icon-title">Нет необходимости ехать в офис</span>
          <span className="info-icon-title">Огромный выбор направлений</span>
        </div>
      </div>
    </section>
  );
};
