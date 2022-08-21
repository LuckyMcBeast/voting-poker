import { useRouter } from "next/router";
import { delimiter } from "path";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import VotingGrid from "../components/VotingGrid";


let socketUrl: string = process.env.SOCKET_IO_SERVER || "http://localhost:3200"
let socket: Socket 

function splitName(path: string): string{
  const splitPath : string[] = path.split('-')
  if(splitPath.length > 0){
    splitPath.pop()
    return splitPath.join().slice(1)
  }
  return ""
}


const VotingPoker = () => {
  const [socketId, setSocketId] = useState("");
  const [test, setTest] = useState(false);
  const router = useRouter()



  useEffect(() => {
    initSocket();
  }, []);

  useEffect (() => {
    router.beforePopState(() => {
      socket.disconnect()
      return true
    })
  })

  const initSocket = async () => {
    if (socketId === "") {
      socket = io(socketUrl,
        {
          forceNew: true
        })
        console.log(router.asPath)
        socket.emit('setName', splitName(router.asPath))
    }

    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log(`Connected: ${socket.id}`);
    });

    socket.on("pass", () => {
      console.log("PASS");
      setTest(true);
    });

  };

  const testSocket = (e: React.MouseEvent) => {
    console.log("Emitting");
    socket.emit("test", 'This is a test');
  };

  const countNumberVote = (e: React.MouseEvent, number : number) => {
    socket.emit('numberVote', number)
  }
  
  

  return (
    <div className="primaryCenteredDiv grid-flow-col">
      <div className="w-60 h-[75vh] flex flex-col place-content-evenly border-r border-slate-500">
        <h3>Lobby</h3>
        <div className="h-[50vh]">
          <ul className="grid h-100 grid-flow-row gap-5 text-right pr-10">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <div>
          <p>Share Room</p>
          <a>url.url.com/4352345423</a>
        </div>
      </div>
      <VotingGrid testSocket={testSocket}/>
      <div className=" w-60 h-[75vh] flex flex-col place-content-evenly border-l border-slate-500">
        <div className="h-[25vh] flex flex-col place-content-start gap-5 pl-10 text-left">
          <h3>Voting Results</h3>
          <div className="grid h-100 grid-flow-row gap-5 text-left">
            <div className="grid grid-flow-col">
              <p>Average</p>
              <p className="text-right">1</p>
            </div>
            <div className="grid grid-flow-col">
              <p>Median</p>
              <p className="text-right">1</p>
            </div>
            <div className="grid grid-flow-col">
              <p>Context</p>
              <p className="text-right">1</p>
            </div>
          </div>
        </div>
        <h3>Previous Votes</h3>
        <div className="h-[25vh] flex flex-col place-content-start">
          <ul className="grid h-100 grid-flow-row gap-5 text-left pl-10">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <a href="https://mcullenm.dev" className="pt-2">mcullenm.dev</a>
      </div>
    </div>
  );
};

export default VotingPoker;
