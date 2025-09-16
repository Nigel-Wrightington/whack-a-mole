import { useContext } from "react";
import GameContext from "../game/GameContext";

function Burrow({ hasBunny }) {
  const { hop } = useContext(GameContext);
  console.log("hasBunny", hasBunny);
  return (
    <li className={`burrow ${hasBunny ? "bunny" : ""}`} onClick={hop}></li>
  );
}

export default Burrow;
