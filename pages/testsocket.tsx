import io, { Socket } from "socket.io-client";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

let socketV2: Socket;

const TestSocketV2: NextPage = () => {
  const [socketId, setSocketId] = useState("");
  const [test, setTest] = React.useState(false);
  useEffect(() => {
    initSocketV2();
  }, []);

  const initSocketV2 = async () => {
    await fetch("/api/socket");
    if (socketId === "") {
      socketV2 = io();
    }

    socketV2.on("connect", () => {
      setSocketId(socketV2.id);
      console.log(`Connected: ${socketV2.id}`);
    });

    socketV2.on("pass", () => {
      console.log("PASS");
      setTest(true);
    });

  };

  const testSocket = (e: React.MouseEvent) => {
    console.log("Emitting");
    socketV2.emit("test", 'This is a test');
  };

  return (
    <div>
      <button onClick={(e) => testSocket(e)}>Test Socket</button>
      <p>{`${test}`}</p>
    </div>
  );
};

export default TestSocketV2;
