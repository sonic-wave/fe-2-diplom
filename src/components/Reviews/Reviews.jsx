import './Reviews.css'
import ekaterina from '../../public/img/ekaterina.png';
import evgenyi from '../../public/img/evgenyi.png';
import dots from '../../public/svg/dots.svg';

export const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-section-container">
        <h2 className="reviews-title">Отзывы</h2>
        <div className="reviews-container">
          <div className="review-container">
            <img src={ekaterina} alt="ekaterina" className="review-image" />
            <p className="review-text">
              <span className="review-title">Екатерина Вальнова</span>
              <br />
              <br />
              Доброжелательные подсказки<br /> на всех этапах помогут правильно
              заполнить поля и без затруднений купить авиа или ж/д билет, даже
              если вы заказываете онлайн билет впервые.
            </p>
          </div>
          <div className="review-container">
            <img src={evgenyi} alt="evgenyi" className="review-image" />
            <p className="review-text">
              <span className="review-title">Евгений Стрыкало</span>
              <br />
              <br />
              СМС-сопровождение до посадки<br /> Сразу после оплаты ж/д билетов<br /> и за 3
              часа до отправления мы пришлем вам<br /> СМС-напоминание о поездке.
            </p>
          </div>
        </div>
        <img src={dots} alt='dots' className='reviews-dots' />
      </div>
    </section>
  );
};
