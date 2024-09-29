"use client"

import React, { useCallback, useContext, useEffect, useState } from "react";
import {Socket, io } from "socket.io-client";
interface socketProviderProps{
    children?:React.ReactNode;
}
interface ISocketProvider{
    sendMessage:(msg: string)=>any;
}
const SocketContext=React.createContext<ISocketProvider | null>(null);
export const useSocket=()=>{
        const state=useContext(SocketContext);
        if(!state) throw new Error(`State is undefined`);
        return state;
}
export const SocketProvider: React.FC<socketProviderProps>=({children})=>{
   const [socket,setSocket]=useState<Socket |null>(null) 
    const sendMessage:ISocketProvider["sendMessage"]=useCallback((msg)=>{
        console.log("one Message send",msg)
        if(socket){
            socket?.emit('event:message',{message:msg});
        }
    },[socket]);
useEffect(()=>{
   const _socket= io("http://localhost:8000");
   setSocket(_socket);
    return ()=>{
        _socket.disconnect();
        setSocket(null);
    }
},[]);
    return (
        <SocketContext.Provider value={{sendMessage}}>
           {children}
        </SocketContext.Provider>   
    )
}       