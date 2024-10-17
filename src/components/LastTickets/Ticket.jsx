import filterIcon1 from "../../img/widget-filter/filter-5.png";
import filterIcon2 from "../../img/widget-filter/filter-7.png";
import filterIcon3 from "../../img/widget-filter/filter-6.png";

const Ticket = ({ ticket }) => {
  return (
    <div className="last-ticket">
      <div className="ticket-head">
        <div className="ticket-content">
          <h4 className="ticket-title">{ticket.departure.from.city.name}</h4>
          <p className="ticket-subtitle">
            {ticket.departure.from.railway_station_name} вокзал
          </p>
        </div>
        <div className="ticket-content content-right">
          <h4 className="ticket-title">{ticket.departure.to.city.name}</h4>
          <p className="ticket-subtitle">
            {ticket.departure.to.railway_station_name} вокзал
          </p>
        </div>
      </div>
      <div className="ticket-body">
        <div className="ticket-options">
          {ticket.departure.have_wifi && (
            <img src={filterIcon1} alt="wifi" className="ticket-option " />
          )}
          {ticket.departure.have_air_conditioning && (
            <img src={filterIcon2} alt="air" className="ticket-option" />
          )}
          {ticket.departure.is_express && (
            <img src={filterIcon3} alt="express" className="ticket-option" />
          )}
        </div>
        <div className="ticket-price">
          <p className="price-text">от</p>
          <h4 className="price-title last">{ticket.departure.min_price}</h4>
          <div className="price-currency"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
