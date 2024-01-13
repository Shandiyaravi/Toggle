import { useState } from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.state ? "Black" : "Transparent",
  };

  return (
    <div
      onClick={() => props.handleClick(props.id)}
      style={styles}
      className="box"
    ></div>
  );
}
