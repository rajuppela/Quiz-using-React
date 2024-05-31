import { useEffect, useRef, useState } from "react"
import useSound from "use-sound";
import wait from "../assets/wait.mp3";

export default function Start({setUserName}) {
    const inputName = useRef();
    const [bgm] = useSound(wait);

    useEffect(()=>{
       bgm()
    },[bgm]);

    const clickHandle = ()=>{
        inputName.current.value && setUserName((inputName.current.value).toUpperCase());
    }
  return (
    <div className="start">
      <input type="text" placeholder="Enter Your Name" className="startInput" ref={inputName}/>
      <button className="startButton" onClick={clickHandle}>Start</button>
    </div>
  )
}
