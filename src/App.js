import React, { useState } from "react";
import "./App.css";
import UseStateArray from "./component/UseStateArray";
import SlotM from "./component/SlotM";
import DigitalClock from "./component/DigitalClock";
import Accordian from "./component/Accordian";
import ContorlledComp from "./component/ContorlledComp";
import Todo from "./component/Todo";

function App() {
  const [str, setStr] = useState("Vaibhav");

  const changeName = () => {
    let str1 = str;

    str1 === "Vaibhav" ? setStr("Gayatri") : setStr("Vaibhav");
  };

  return (
    <>
      {/* <h1>Hello {str}</h1>
      <button onClick={changeName}>Click Me!</button>
      <UseStateArray /> */}
      {/* <div
        style={{
          textAlign: "center",
          width: 600,
          margin: "45px  auto 15px auto",
          border: "1px solid #dfdfdf",
          padding: 0,
        }}
      >
        <h1>Welcome to slot machine Game 😃 </h1>
        <hr />

        <SlotM x="😃" y="😃" z="😃" />
        <SlotM x="😃" y="🎅" z="😃" />
        <SlotM x="😃" y="📡" z="💁‍♀️" />
      </div> */}

      {/* <div
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <DigitalClock />
      </div> */}

      <Todo />

      <Accordian />

      <ContorlledComp />
    </>
  );
}

export default App;
