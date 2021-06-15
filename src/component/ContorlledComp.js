import React, { useState } from "react";

const ContorlledComp = () => {
  const [headName, setHeadName] = useState();
  const [headTitle, setHeadTitle] = useState();

  const printVal = (e) => {
    console.log("i am changing", e.target.value);
    setHeadName(e.target.value);
  };

  const printHeader = () => {
    setHeadTitle(headName);
  };

  return (
    <>
      <h1>Hello, {headTitle}</h1>
      <input type="text" onChange={printVal} placeholder="Enter your name" />
      <button onClick={printHeader}>Submit</button>
    </>
  );
};

export default ContorlledComp;
