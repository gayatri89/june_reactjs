import React, { useState } from "react";
import MyAccordian from "./MyAccordian";
import questions from "./api";

const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div
        style={{
          margin: "50px auto",
          width: 800,
          textAlign: "center",
          border: "1px solid #dfdfdf",
          padding: "15px 40px",
        }}
      >
        <h1>Acoordian Demo</h1>

        <div style={{ textAlign: "left" }}>
          {data.map((curEle) => {
            const { id } = curEle;
            return <MyAccordian key={id} {...curEle} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
