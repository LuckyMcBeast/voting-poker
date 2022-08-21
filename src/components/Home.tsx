import { createStore } from 'solid-js/store'
import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const sessionFormStyle: string = "w-80 flex flex-col gap-4";
const formButtonOuterStyle: string = "w-80 flex justify-center";


export const Home: Component = () => {
  const [state, setState] = createStore({name : ''});
  const navigate = useNavigate()

  const startRoom = async (e: MouseEvent) => {
    const randNum = Math.floor(10000 + Math.random() * 90000);
    const room = `${state.name}-${randNum}`;
    console.log(`Starting Room: ${room}`);
    navigate(`/${room}`);
  };

  return (
    <div class="primaryCenteredDiv">
      <div class="w-80">
        <h1>Agile Voting Poker</h1>
      </div>
      <form class={sessionFormStyle}>
        <div class="text-center">Enter Your Name</div>
        <input
          type="text"
          name="name"
          onKeyUp={(e) => setState({name: e.currentTarget.value})}
          class="inputText"
        />
      </form>
      <div class={formButtonOuterStyle}>
        <button
          onClick={(e) => startRoom(e)}
          class="buttonStyle"
        >{`Let's Do This!`}</button>
      </div>
      <a href="https://mcullenm.dev" class="pt-2">
        mcullenm.dev
      </a>
    </div>
  );
};
