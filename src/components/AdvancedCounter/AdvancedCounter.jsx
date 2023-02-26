import React from "react";
import './style.css'
import Navbar from "./Navbar/Navbar";
import ResetBtn from "./ResteBtn/ResetBtn";
import CounterRow from "./CounterRow/CounterRow";

function AdvancedCounter(props) {
  const counterRows = [0, 0, 0, 0]

  return (
    <div className="ac-container">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <div className="reset">
          <ResetBtn />
        </div>
        <div className="counter-row-container">
          {counterRows.map((item, index) => {
            return <CounterRow />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AdvancedCounter;
