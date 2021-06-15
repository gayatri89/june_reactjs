import React from "react";

const ToDoItem = (props) => {
  return (
    <>
      {console.log(props)}
      <li className={props.id} key={props.id}>
        <button
          onClick={() => {
            props.delitem(props.id);
          }}
        >
          ➖
        </button>
        {props.itemval}
      </li>
    </>
  );
};

export default ToDoItem;
