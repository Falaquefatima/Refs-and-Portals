import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
  }

  function handleReset(){
    setRemainingTime(targetTime*1000)
  }
  return (
    <>
      {
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          remainingTime={timeRemaining}
          onReset={handleReset}
        />
      }

      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost</p>} */}
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"}Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inACTIVE"}
        </p>
      </section>
    </>
  );
}
