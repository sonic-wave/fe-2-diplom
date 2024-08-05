import "./SearchBox.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();
  const SubmitHandler = () => {
    navigate('/searchpage');
  }

  return (
    <div className="searchBox-container">
      <form className="searchBox-form">
        <label htmlFor="from">
          <div className="searchBox-formText">Направление</div>
          <div className="searchBox-direction">
            <div className="inputContainer">
              <input
                type="text"
                id="from"
                className="destinationInput-From searchBox-input"
                placeholder="Откуда"
              />
              <span className="navigation-icon"></span>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="destinationInput-To searchBox-input"
                placeholder="Куда"
              />
              <span className="navigation-icon"></span>
            </div>
          </div>
        </label>
        <label htmlFor="departureDate">
          <div className="searchBox-formText">Дата</div>
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
        {/* <label htmlFor="departureDate">
          <div className="searchBox-formText">Дата</div>
          <div className="searchBox-date">
            <div className="inputContainer">
              <input
                type="text"
                id="departureDate"
                className="destinationInput-date searchBox-input"
                placeholder="ДД/ММ/ГГ"
              />
              <span className="date-icon"></span>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="destinationInput-date searchBox-input"
                placeholder="ДД/ММ/ГГ"
              />
              <span className="date-icon"></span>
            </div>
          </div>
        </label> */}
        {/* <label htmlFor="departureDate">
          <div className="searchBox-formText">Дата</div>
          <div className="searchBox-date">
            <div className="inputContainer">
              <input
                type="text"
                id="departureDate"
                className="destinationInput-date searchBox-input"
                placeholder="ДД/ММ/ГГ"
              />
              <span 
                className="date-icon" 
                onClick={() => setShowCalendar(!showCalendar)}
              ></span>
              {showCalendar && (
                <DatePicker
                  selected={null}
                  onChange={() => {}}
                  inline
                  locale="ru"
                />
              )}
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="destinationInput-date searchBox-input"
                placeholder="ДД/ММ/ГГ"
              />
              <span 
                className="date-icon" 
                onClick={() => setShowCalendar(!showCalendar)}
              ></span>
              {showCalendar && (
                <DatePicker
                  selected={null}
                  onChange={() => {}}
                  inline
                />
              )}
            </div>
          </div>
        </label> */}
      </form>
      <button className="searchBox-btn" type="submit" onClick={SubmitHandler}>
        Найти билеты
      </button>
    </div>
  );
};
