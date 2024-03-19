import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { VscDebugRestart } from "react-icons/vsc";

function StopWatch() {

  const [isrunning, setIsRunning] = useState(false); //track if the state is running or not
  const [elapsedTime, setElapsedTime] = useState(0); //duration of since the clock started
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0); //from where the time has started

  //updating of reference doesn't cause our application to render, a state change does
  useEffect(()=>{
    if(isrunning){
      intervalIdRef.current = setInterval(() =>{
        setElapsedTime(Date.now() - startTimeRef.current)
      },10)
      console.log(intervalIdRef.current,"interval")
      console.log(setInterval)
      // console.log(startTimeRef,"startTime")
      // console.log(elapsedTime,"elapsed")

    }
    return () =>{
      clearInterval(intervalIdRef.current)
    }
  },[isrunning])

  function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime; //current data and time in ms - current time in stopwatch
    // console.log(startTimeRef)
  }

  function pause(){
    setIsRunning(false)
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false)
  }

  function formatTime(){

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    return `${ hours } : ${ minutes } : ${ seconds } : ${ milliseconds }`;
  }

  return (
    <div className='w-[45%] mx-auto justify-center text-center'>
      <div className='bg-[#f1c3c9] backdrop-blur-md py-8 bg-transparent shadow-[rgba(0.2,0.2,0,0.2)_10px_10px_10px_10px] rounded-full'>

          <h1 className='text-6xl font-bold text-[#411d2c] py-10'>StopWatch</h1>
          <div className='text-5xl font-bold text-[#774048]'>{formatTime()}</div>

          <div className='my-1'>
            <ul className='flex gap-5 text-xs text-[#774048] text-center mx-auto justify-center'>
              <li className='ml-3'>Hours</li>
              <li className='ml-7'>Minutes</li>
              <li className='ml-7'>Seconds</li>
              <li className='ml-3'>Milliseconds</li>
            </ul>
          </div>

          <div className='flex gap-4 text-center justify-center w-[40%] mx-auto py-7'>
            {
              isrunning ?
              <button className='text-2xl text-[#411d2c] rounded-full bg-[#c6979d] p-5' onClick={pause}><GiPauseButton /></button> :
              <button className='text-2xl text-[#411d2c] rounded-full bg-[#c6979d] p-5' onClick={start}><FaPlay /></button>
            }
            <button className='text-2xl text-[#411d2c] rounded-full bg-[#c6979d] p-5' onClick={reset}><VscDebugRestart /></button>
          </div>
        
      </div>
    </div>
  )
}

export default StopWatch;

