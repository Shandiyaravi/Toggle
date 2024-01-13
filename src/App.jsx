import { useState } from "react";
import Box from "./Box";
import Data from "./Data";

export default function App() {
  const [squares, setSquares] = useState(Data);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const squareElemets = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      state={square.on}
      handleClick={toggle}
    ></Box>
  ));

  return <main>{squareElemets}</main>;
}
