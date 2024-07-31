import "./SearchBox.css";

export const SearchBox = () => {
  return (
    <div className="searchBox-container">
      <form className="searchBox-form">
        <label className='searchBox-formText' htmlFor="from">
          Направление
          <div className="searchBox-direction">
            <input
              type="text"
              id="from"
              className="destinationInput-From searchBox-input"
              placeholder="Откуда"
            />
            <input
              type="text"
              className="destinationInput-To searchBox-input"
              placeholder="Куда"
            />
          </div>
        </label>
        <label className='searchBox-formText' htmlFor="departureDate">
          Дата
          <div className="searchBox-date">
            <input
              type="date"
              id="departureDate"
              className="destinationInput-date searchBox-input"
              placeholder="ДД/ММ/ГГ"
            />
            <input
              type="date"
              className="destinationInput-date searchBox-input"
              placeholder="ДД/ММ/ГГ"
            />
          </div>
        </label>
      </form>
      <button className='searchBox-btn' type='submit'>Найти билеты</button>
    </div>
  );
};
