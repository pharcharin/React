import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import PolarChart from "./components/PolarAreaChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(255,222,100,71)",
          "#FF7F50",
          "#DE3163",
          "#6495ED",
          "#47F64C",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 650 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <LineChart chartData= {userData} />
      </div>
      <div style={{ width: 650 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <PolarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;