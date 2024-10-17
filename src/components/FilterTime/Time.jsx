import RangeTimeInput from "../../components/RangeTimeInput/RangeTimeInput";

const Time = ({ name, route, show }) => {
  return (
    <div className={`time-body time-${route} ${show}`}>
      <h4 className={`time-subtitle subtitle-${route}`}>Время {name}</h4>
      <div className={`time-range ${route}`}>
        <div className={`range-input ${route}`}>
          <RangeTimeInput />
        </div>
      </div>
    </div>
  );
};

export default Time;
