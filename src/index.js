import React from "react";
import ReactDOM from "react-dom/client";
import Snowfall from "react-snowfall";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      snowflakeCount={70}
      speed={[0.5, 1.0]}
      wind={[-0.5, 0.5]}
      radius={[0.1, 1.0]}
    />
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
