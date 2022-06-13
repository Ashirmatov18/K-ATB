import React from "react";

export default function Modal(props) {
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "300px",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <h1>{props.title.title}</h1>
        <h1>{props.id.id}</h1>
      </div>
    </div>
  );
}
