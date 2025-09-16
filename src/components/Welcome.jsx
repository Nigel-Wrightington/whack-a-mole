import { useContext } from "react";
import GameContext from "../game/GameContext";
function Welcome() {
  const { start } = useContext(GameContext);
  return (
    <section className="welcome">
      <p>Welcome to Bunny Burrow!</p>
      <p>Click the bunny to score points before time runs out</p>
      <button onClick={start}>Start Game</button>
    </section>
  );
}

export default Welcome;
