import { createContext, useEffect, useState, useRef } from "react";

const NUM_BURROWS = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [burrows, setBurrows] = useState();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME_LIMIT);
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  // Keeps track of the game time, it ends the round by calling stop
  useEffect(() => {
    if (time <= 0 && playing) {
      stop();
    }
  }, [time, playing]);

  const start = () => {
    setScore(0);
    setPlaying(true);
    setBurrows(makeBurrows());
    timer.current = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
  };

  // Stops the game
  // Sets playing to false
  // Reset the time to stop ticking
  const stop = () => {
    setPlaying(false);
    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  // Increment the score
  // Move the bunny to a different hole
  const hop = () => {
    setScore((prevScore) => prevScore + 1);
    setBurrows(makeBurrows(burrows));
  };

  const value = {
    burrows,
    score,
    time,
    timeLimit: TIME_LIMIT,
    playing,
    start,
    stop,
    hop,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// Create an array of 9 holes
// We need to place a bunny in a random hole
// [false, false, false, false, false , false]
function makeBurrows(prev = []) {
  const newField = Array(NUM_BURROWS).fill(false);
  let bunny = Math.floor(Math.random() * NUM_BURROWS);
  while (prev[bunny]) {
    bunny = Math.floor(Math.random() * NUM_BURROWS);
  }
  newField[bunny] = true;
  return newField;
}

export default GameContext;
