import { useContext } from "react";
import GameContext from "./game/GameContext";
import ScorePanel from "./components/ScorePanel";
import Welcome from "./components/Welcome";
import BurrowField from "./components/BurrowField";

function App() {
  const { playing } = useContext(GameContext);

  return (
    <>
      <h1>Bunny Burrow</h1>
      {playing ? (
        <>
          <ScorePanel />
          <BurrowField />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;
