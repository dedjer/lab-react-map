import React from "react";
import ReactDOM from "react-dom";
import Vehicle from "./Vehicle";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React JSON Map Error</h1>
      <h2>TypeError this.state.vehicle.map is not a function</h2>
      <Vehicle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
