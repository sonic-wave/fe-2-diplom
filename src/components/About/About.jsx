import './About.css'

export const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">О нас</h2>
      <div className="about-paragraph-container">
        <div className="about-line"></div>
        <p className="about-paragraph">
          Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем <br /> все больше людей заказывают жд билеты
          через интернет.
          <br />
          <br />
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать?<br />
          Мы расскажем о преимуществах заказа через
          интернет.
          <br />
          <br />
          <span className="about-paragraph-span">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br />
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </span>
        </p>
      </div>
    </section>
  );
};
