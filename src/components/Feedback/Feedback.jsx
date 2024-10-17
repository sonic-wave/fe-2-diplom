import "./Feedback.css";
import Review from "./Review.jsx";
import profileImg1 from "../../img/feedback/feedback1.png";
import profileImg2 from "../../img/feedback/feedback2.png";

const Feedback = () => {
  return (
    <section className="section-feedback" id="feedback">
      <div className="feedback-container">
        <h2 className="feedback-title">Отзывы</h2>
        <div className="feedback-content">
          <div className="feedback-item">
            <Review
              link={profileImg1}
              title="Екатерина Вальнова"
              text={
                <>
                  Доброжелательные подсказки <br /> на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые
                </>
              }
            />
          </div>
          <div className="feedback-item">
            <Review
              link={profileImg2}
              title="Евгений Стрыкало"
              text={
                <>
                  СМС-сопровождение до посадки <br />
                  Сразу после оплаты ж/д билетов <br />и за 3 часа до
                  отправления мы пришлем вам СМС-напоминание о поездке.
                </>
              }
            />
          </div>
        </div>
        <div className="feedback-footer">
          <button className="feedback-footer-btn selected" disabled></button>
          <button className="feedback-footer-btn"></button>
          <button className="feedback-footer-btn"></button>
          <button className="feedback-footer-btn"></button>
          <button className="feedback-footer-btn"></button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
