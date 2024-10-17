// import TrainCard from "../TrainCard/TrainCard";
// import { useSelector } from "react-redux";
// import "./SelectionTrain.css";
// import ChangePages from "../../components/ChangePages/ChangePages";
// import FilterRoute from "../FilterRoute/FilterRoute";

// const SelectionTrain = () => {
//   const { error } = useSelector((state) => state.trains);
//   const trains = JSON.parse(localStorage.getItem("trains")) || error;
//   return (
//     <>
//       {trains.length > 0 ? (
//         <>
//           <FilterRoute />
//           <div className="train-cards">
//             {trains.map((el) => (
//               <TrainCard card={el} key={el.departure._id} />
//             ))}
//           </div>
//           <ChangePages />
//         </>
//       ) : (
//         <p className="train-cards-error">
//           Прямых рейсов по маршруту не найдено
//         </p>
//       )}
//     </>
//   );
// };

// export default SelectionTrain;

import TrainCard from "../TrainCard/TrainCard";
import { useSelector } from "react-redux";
import "./SelectionTrain.css";
import ChangePages from "../../components/ChangePages/ChangePages";
import FilterRoute from "../FilterRoute/FilterRoute";

const SelectionTrain = () => {
  const { error } = useSelector((state) => state.trains);
  
  const storedTrains = localStorage.getItem("trains");
  const trains = storedTrains ? JSON.parse(storedTrains) : error;

  return (
    <>
      {trains && trains.length > 0 ? (
        <>
          <FilterRoute />
          <div className="train-cards">
            {trains.map((el) => (
              <TrainCard card={el} key={el.departure._id} />
            ))}
          </div>
          <ChangePages />
        </>
      ) : (
        <p className="train-cards-error">
          Прямых рейсов по маршруту не найдено
        </p>
      )}
    </>
  );
};

export default SelectionTrain;
