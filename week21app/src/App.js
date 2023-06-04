import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 4],
  ["Еда", 2],
  ["Общение", 1],
  ["Развлечения", 3],
  ["Сон", 8],
  ["Хобби", 6],
];

export const options = {
  title: "Мои дела",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


export default App;
