import React from "react";

const Cards = (props) => {
  console.log(props);
  return (
    <>
      <div className="box">
        <h1 key={props.ukey}>
          Name {props.myName} & Age {props.myAge}
        </h1>
        <button onClick={props.clickeve}>remove</button>
      </div>
    </>
  );
};

export default Cards;
