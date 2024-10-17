import FilterTime from "../FilterTime/FilterTime";
import LastTickets from "../LastTickets/LastTickets";
import "./WidgetFilter.css";
import Checkbox from "./components/Checkbox";
import { useState } from "react";
import { useSelector } from "react-redux";
import CalendarForm from "../CalendarForm/CalendarForm";
import RangeInput from "../../components/RangeInput/RangeInput";
import widgetFilterIcon1 from "../../img/widget-filter/filter-1.png";
import widgetFilterIcon2 from "../../img/widget-filter/filter-2.png";
import widgetFilterIcon3 from "../../img/widget-filter/filter-3.png";
import widgetFilterIcon4 from "../../img/widget-filter/filter-4.png";
import widgetFilterIcon5 from "../../img/widget-filter/filter-5.png";
import widgetFilterIcon6 from "../../img/widget-filter/filter-6.png";

const WidgetFilter = () => {
  const [calendar, setCalendar] = useState({ direction: "", open: false });
  const { fromDate, toDate } = useSelector((state) => state.choice);

  const onClick = (e) => {
    setCalendar((prev) => ({ ...prev, direction: e.target.id }));
    calendar.open === false
      ? setCalendar((prev) => ({ ...prev, open: true }))
      : setCalendar((prev) => ({ ...prev, open: false }));
  };

  return (
    <aside className="aside-widgets">
      <div className="widget-filter">
        <div className="filter-dates">
          <div className="date date-from">
            <h3 className="date-title from">Дата поездки</h3>
            <input
              type="date"
              className="date-input from"
              id="from"
              placeholder="ДД/ММ/ГГ"
              onClick={onClick}
              defaultValue={fromDate}
              defaultChecked
            />
          </div>
          <div className="date date-to">
            <h3 className="date-title to">Дата возвращения</h3>
            <input
              type="date"
              className="date-input to"
              id="to"
              placeholder="ДД/ММ/ГГ"
              onClick={onClick}
              defaultValue={toDate}
              defaultChecked
            />
          </div>
          {calendar.open && (
            <CalendarForm
              name={`main-page train ${calendar.direction}`}
              direction={calendar.direction}
            />
          )}
        </div>
        <div className="filter-checkboxes">
          <Checkbox
            link={widgetFilterIcon1}
            alt={"купе"}
            name={"Купе"}
            id={"coupe"}
          />
          <Checkbox
            link={widgetFilterIcon2}
            alt={"плацкарт"}
            name={"Плацкарт"}
            id={"reserved"}
          />
          <Checkbox
            link={widgetFilterIcon3}
            alt={"сидячий"}
            name={"Сидячий"}
            id={"seated"}
          />
          <Checkbox
            link={widgetFilterIcon4}
            alt={"люкс"}
            name={"Люкс"}
            id={"lux"}
          />
          <Checkbox
            link={widgetFilterIcon5}
            alt={"wi-fi"}
            name={"Wi-Fi"}
            id={"wifi"}
          />
          <Checkbox
            link={widgetFilterIcon6}
            alt={"экспресс"}
            name={"Экспресс"}
            id={"express"}
          />
        </div>
        <div className="filter-price">
          <h3 className="price-title">Cтоимость</h3>
          <div className="price-range">
            <div className="range-text">
              <p>от</p>
              <p>до</p>
            </div>
            <RangeInput min={1920} max={7000} />
          </div>
        </div>
        <FilterTime title={"Туда"} route={"to"} />
        <FilterTime title={"Обратно"} route={"back"} />
      </div>
      <div className="widget-last-tickets">
        <h3 className="last-tickets-title">Последние билеты</h3>
        <div className="last-tickets">
          <LastTickets />
        </div>
      </div>
    </aside>
  );
};

export default WidgetFilter;
