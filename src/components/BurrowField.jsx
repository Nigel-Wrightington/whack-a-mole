import { useContext } from "react";
import GameContext from "../game/GameContext";
import Burrow from "./Burrow";
/* 
    BurrowField - List render / Grid 
    Read the burrows context

    Take burrows and then display in a 3 x 3 field
    items that we map to <Burrow /> boolean to each cell
    */
function BurrowField() {
  const { burrows } = useContext(GameContext);
  console.log(burrows);

  return (
    <ul className="field">
      {burrows.map((hasBunny, index) => (
        <Burrow key={index} hasBunny={hasBunny} />
      ))}
    </ul>
  );
}

export default BurrowField;
