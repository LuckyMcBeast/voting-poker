import { useLocation } from "@solidjs/router";
import { io, Socket } from "socket.io-client";
import { Component, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import VotingGrid from "./VotingGrid";

let socketUrl: string = import.meta.env.SOCKET_IO_SERVER || "http://localhost:3200"
let socket: Socket 

function splitName(path: string): string{
  const splitPath : string[] = path.split('-')
  if(splitPath.length > 0){
    splitPath.pop()
    return splitPath.join().slice(1)
  }
  return ""
}


const VotingPoker : Component = () => {
  const [state, setState] = createStore({socketId: '', name: '', test: false});
  const location = useLocation()

  onMount(() => {
    initSocket();
  })


  // useEffect (() => {
  //   router.beforePopState(() => {
  //     socket.disconnect()
  //     return true
  //   })
  // })

  const initSocket = async () => {
    if (state.socketId === "") {
      await fetch(socketUrl)
      socket = io(socketUrl,
        {
          forceNew: true
        })
        console.log(location.pathname)
        socket.emit('setName', splitName(location.pathname))
    }

    socket.on("connect", () => {
      setState({socketId: socket.id});
      console.log(`Connected: ${socket.id}`);
    });

    socket.on("pass", () => {
      console.log("PASS");
      setState({test: true});
    });

  };

  const testSocket = (e: MouseEvent) => {
    console.log("Emitting");
    socket.emit("test", 'This is a test');
  };

  const countNumberVote = (e: MouseEvent, number : number) => {
    socket.emit('numberVote', number)
  }
  
  

  return (
    <div class="primaryCenteredDiv grid-flow-col">
      <div class="w-60 h-[75vh] flex flex-col place-content-evenly border-r border-slate-500">
        <h3>Lobby</h3>
        <div class="h-[50vh]">
          <ul class="grid h-100 grid-flow-row gap-5 text-right pr-10">
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
      <div class=" w-60 h-[75vh] flex flex-col place-content-evenly border-l border-slate-500">
        <div class="h-[25vh] flex flex-col place-content-start gap-5 pl-10 text-left">
          <h3>Voting Results</h3>
          <div class="grid h-100 grid-flow-row gap-5 text-left">
            <div class="grid grid-flow-col">
              <p>Average</p>
              <p class="text-right">1</p>
            </div>
            <div class="grid grid-flow-col">
              <p>Median</p>
              <p class="text-right">1</p>
            </div>
            <div class="grid grid-flow-col">
              <p>Context</p>
              <p class="text-right">1</p>
            </div>
          </div>
        </div>
        <h3>Previous Votes</h3>
        <div class="h-[25vh] flex flex-col place-content-start">
          <ul class="grid h-100 grid-flow-row gap-5 text-left pl-10">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <a href="https://mcullenm.dev" class="pt-2">mcullenm.dev</a>
      </div>
    </div>
  );
};

export default VotingPoker;
