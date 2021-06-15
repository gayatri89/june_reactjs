import React, { useState, useEffect } from "react";
import "../App.css";
import Cards from "./Cards";

const UseStateArray = () => {
  const bioData = [
    { id: 0, myName: "Gayatri", myAge: 27 },
    { id: 1, myName: "Vaibhav", myAge: 28 },
    { id: 2, myName: "Rahul", myAge: 17 },
    { id: 3, myName: "Aadhya", myAge: 2 },
  ];

  const [myArray, setMyArray] = useState(bioData);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  const clearBioData = () => {
    setMyArray([]);
  };

  const removeElement = (id) => {
    const myNewArray = myArray.filter((currEle) => {
      return currEle.id !== id;
    });
    setMyArray(myNewArray);
  };

  return (
    <>
      <i>{count}</i>
      {myArray.map((currEle) => {
        return (
          <>
            <Cards
              ukey={currEle.id}
              uname={currEle.myName}
              uage={currEle.myAge}
              clickeve={() => removeElement(currEle.id)}
            />
            {/* <h1 key={currEle.id}>
                Name {currEle.myName} & Age {currEle.myAge}
              </h1>
              <button onClick={() => removeElement(currEle.id)}>remove</button> */}
          </>
        );
      })}

      <button onClick={clearBioData}>Clear All</button>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
};

export default UseStateArray;
