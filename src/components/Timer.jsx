import React, { useState, useEffect } from "react";

import { displayTime } from "../utilities/displayTime";

const Timer = ({ runningTime, setRunningTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let timerInterval;

  useEffect(() => {
    if (isPlaying) {
      timerInterval = setInterval(() => {
        setRunningTime((runningTime) => runningTime + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTimer = () => {
    setRunningTime(0);
  };

  return (
    <div>
      <h1 className="running-time">{displayTime(runningTime)}</h1>
      <div className="timer-buttons">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : runningTime > 0 ? "Resume" : "Start"}
        </button>
        <button onClick={resetTimer} disabled={runningTime <= 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
