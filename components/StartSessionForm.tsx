import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import { io } from "socket.io-client";

const sessionFormStyle: string = "w-80 flex flex-col gap-4";
const formButtonOuterStyle: string = "w-80 flex justify-center";


export const StartSessionForm: React.FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const startRoom = async (e: React.MouseEvent) => {
    const randNum = Math.floor(10000 + Math.random() * 90000);
    const room = `${name}-${randNum}`;
    console.log(`Starting Room: ${room}`);
    router.push(`/${room}`);
  };

  return (
    <div className="primaryCenteredDiv">
      <div className="w-80">
        <h1>Agile Voting Poker</h1>
      </div>
      <form className={sessionFormStyle}>
        <div className="text-center">Enter Your Name</div>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="inputText"
        />
      </form>
      <div className={formButtonOuterStyle}>
        <button
          onClick={(e) => startRoom(e)}
          className="buttonStyle"
        >{`Let's Do This!`}</button>
      </div>
      <a href="https://mcullenm.dev" className="pt-2">
        mcullenm.dev
      </a>
    </div>
  );
};
