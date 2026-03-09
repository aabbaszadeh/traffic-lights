import { useState } from "react";
import TrafficLight from "./TrafficLight";

function App() {
  const [currentLight, setCurrentLight] = useState("red");

  function nextLight() {
    if (currentLight === "red") {
      setCurrentLight("amber");
    } else if (currentLight === "amber") {
      setCurrentLight("green");
    } else {
      setCurrentLight("red");
    }
  }

  return (
    <>
      <h1>Traffic Light</h1>

      <TrafficLight color="red" isOn={currentLight === "red"} />
      <TrafficLight color="orange" isOn={currentLight === "amber"} />
      <TrafficLight color="green" isOn={currentLight === "green"} />

      <button onClick={nextLight}>Next Light</button>
    </>
  );
}

export default App;