import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const Todo = () => {
  const [itemname, setItemName] = useState();
  const [Items, setItems] = useState([]);

  const getItem = (e) => {
    setItemName(e.target.value);
  };

  const displayItems = () => {
    // console.log(...Items);
    return setItems([...Items, itemname]);
    // setItems((oldItems) => {
    //   return [...oldItems, itemname];
    // });
    setItemName("");
  };

  const delItems = (id) => {
    console.log("delete", id);
    setItems((Items) => {
      return Items.filter((tax, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="mid_sec">
          <br />
          <h1>Todo Board</h1>
          <br />
          <div>
            <input
              type="text"
              placeholder="Add a item"
              value={itemname}
              onChange={getItem}
            />
            <button onClick={displayItems}> ➕ </button>
          </div>
          <ul>
            {Items.map((val, index) => {
              return <ToDoItem id={index} itemval={val} delitem={delItems} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
