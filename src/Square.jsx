import React from "react";

function Square(props) {
  return (
    <button onClick={props.onClick} className="square">
      <span className="span-square">.</span>
      {props.state}
      <span className="span-square">.</span>
    </button>
  );
}

export default Square;
