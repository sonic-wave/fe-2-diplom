import "./HowItWork.css";
import HowItWorkItem from "./HowItWorkItem";
import hiw_1_img from "../../img/hiw/hiw-1.png";
import hiw_2_img from "../../img/hiw/hiw-2.png";
import hiw_3_img from "../../img/hiw/hiw-3.png";

const HowItWork = () => {
  return (
    <section className="section-hiw" id="hiw">
      <div className="hiw-container">
        <div className="hiw-head">
          <h2 className="hiw-title">Как это работает</h2>
          <button className="hiw-btn">Узнать больше</button>
        </div>
        <div className="hiw-content">
          <div className="hiw-list">
            <HowItWorkItem
              link={hiw_1_img}
              text={
                <>
                  Удобный заказ <br /> на сайте
                </>
              }
            />
            <HowItWorkItem
              link={hiw_2_img}
              text="Нет необходимости ехать в офис"
            />
            <HowItWorkItem link={hiw_3_img} text="Огромный выбор направлений" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
