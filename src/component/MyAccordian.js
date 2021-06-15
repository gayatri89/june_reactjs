import React, { useState } from "react";

const MyAccordian = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            background: "#efefef",
            margin: "0 auto",
            padding: 12,
            borderRadius: 5,
          }}
        >
          <span
            style={{ margin: "0 15px 0 auto" }}
            onClick={() => setShow(!show)}
          >
            {show ? " ➖ " : " ➕ "}
          </span>
          {props.question}
        </h3>
        {show && (
          <p
            style={{
              background: "lightpink",
              margin: "0 auto",
              padding: "10px 15px",
            }}
          >
            {props.answer}
          </p>
        )}
      </div>
    </>
  );
};

export default MyAccordian;
