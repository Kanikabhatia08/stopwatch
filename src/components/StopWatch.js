import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {

  const [isrunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  //updating of reference doesn't cause our application to render, a state change does
  useEffect(()=>{

  },[isrunning])

  function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    // console.log(startTimeRef)
  }

  function pause(){
    setIsRunning(false)
  }

  function reset(){
    
  }

  function formatTime(){
    return `00:00:00`;
  }
  return (
    <div>
      <div>{formatTime()}</div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </div>
  )
}

export default StopWatch