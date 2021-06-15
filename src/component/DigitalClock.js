import React, { useState } from "react";

const DigitalClock = () => {
  let ctime = new Date().toLocaleTimeString();

  const [display, setDisplay] = useState(ctime);

  const UpdateTime = () => {
    ctime = new Date().toLocaleTimeString();
    setDisplay(ctime);
  };

  setInterval(UpdateTime, 1000);

  return <h1>{ctime}</h1>;
};

export default DigitalClock;
