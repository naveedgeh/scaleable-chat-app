"use client"
import styles from "./page.module.css";
import { useSocket } from "../context/SocketProvider";
import { useState } from "react";
export default function Home() {
  const {sendMessage}=useSocket();
  const [message,setMessage]=useState<string>("");
  return (
    <div>
      <div>
        <h1>All Messages will appear here</h1>
      </div>
      <div>
        <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Messeging....." className={styles['chat-input']}/>
        <button className={styles['button']} onClick={()=>sendMessage(message)}>Send</button>
      </div>
    </div>
  )
}
