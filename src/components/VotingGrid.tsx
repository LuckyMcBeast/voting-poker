import { Component, For } from "solid-js";

const numberGridStyle : string = "h-5/6 grid grid-row-3 grid-cols-3 place-content-evenly place-items-center text-2xl"

interface VotingGridProps {
  testSocket : (e: MouseEvent) => void
}

const VotingGrid: Component<VotingGridProps> = (props) => {
  const votingNumbers = [0.5, 1, 2, 3, 5, 8, 13, 21]
  return (
    <div class="w-[50vh] h-[75vh]">
      <div class={numberGridStyle}>
        <For each={votingNumbers}>
          {number => <NumberVote number={number} gridProps = {props}/>}
        </For>
        <InfinityVote gridProps = {props}/>
      </div>
      <SkipVote gridProps = {props}/>
    </div>
  );
};


interface VotingNumberProps {
  number: number;
  gridProps : VotingGridProps
}

interface InfinityVoteProps {
  gridProps : VotingGridProps
}

interface SkipVoteProps {
  gridProps : VotingGridProps
}



const NumberVote: Component<VotingNumberProps> = ({ number, gridProps}) => {

  return (
    <button class="tealCircle" onClick={e => {gridProps.testSocket(e)}}>
      <p>{number}</p>
    </button>
  );
};

const InfinityVote: Component<InfinityVoteProps> = ({gridProps}) => {
  return (
    <button class="tealCircle text-4xl" onClick={e => {gridProps.testSocket(e)}}>
      <p>{"\u221e"}</p>
    </button>
  );
};

const SkipVote: Component<SkipVoteProps> = ({gridProps}) => {
  return (
    <div class="flex place-content-center">
      <button class="tealCircle" onClick={e => {gridProps.testSocket(e)}}>
        <p>SKIP</p>
      </button>
    </div>
  );
};


export default VotingGrid;
