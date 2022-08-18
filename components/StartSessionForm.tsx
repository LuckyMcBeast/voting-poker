import React from "react";

const sessionFormStyle : string = "w-80 flex flex-col gap-4"
const formButtonOuterStyle : string = "w-80 flex justify-center"

export const StartSessionForm: React.FC = () => {
  return (
    <div className="primaryCenteredDiv">
      <div className="w-80">
          <h1>Agile Voting Poker</h1>
      </div>
      <form className={sessionFormStyle}>
        <div className="text-center">Enter Your Name</div>
          <input type="text" name="name" className="inputText"/>
      <div className={formButtonOuterStyle}>
        <input type="submit" value="Let's Do This!" className="buttonStyle"/>
      </div>
      </form>
      <a href="https://mcullenm.dev" className="pt-2">mcullenm.dev</a>
    </div>
  );
};


