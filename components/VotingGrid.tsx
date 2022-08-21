import { Socket } from "socket.io-client";

const numberGridStyle : string = "h-5/6 grid grid-row-3 grid-cols-3 place-content-evenly place-items-center text-2xl"

interface VotingGridProps {
  testSocket : (e: React.MouseEvent) => void
}

const VotingGrid: React.FC<VotingGridProps> = (props) => {
  
  return (
    <div className="w-[50vh] h-[75vh]">
      <div className={numberGridStyle}>
        <NumberVote number={0.5} gridProps = {props}/>
        <NumberVote number={1} gridProps = {props}/>
        <NumberVote number={2} gridProps = {props}/>
        <NumberVote number={3} gridProps = {props}/>
        <NumberVote number={5} gridProps = {props}/>
        <NumberVote number={8} gridProps = {props}/>
        <NumberVote number={13} gridProps = {props} />
        <NumberVote number={21} gridProps = {props} />
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



const NumberVote: React.FC<VotingNumberProps> = ({ number, gridProps}) => {

  return (
    <button className="tealCircle" onClick={e => {gridProps.testSocket(e)}}>
      <p>{number}</p>
    </button>
  );
};

const InfinityVote: React.FC<InfinityVoteProps> = ({gridProps}) => {
  return (
    <button className="tealCircle text-4xl" onClick={e => {gridProps.testSocket(e)}}>
      <p>{"\u221e"}</p>
    </button>
  );
};

const SkipVote: React.FC<SkipVoteProps> = ({gridProps}) => {
  return (
    <div className="flex place-content-center">
      <button className="tealCircle" onClick={e => {gridProps.testSocket(e)}}>
        <p>SKIP</p>
      </button>
    </div>
  );
};


export default VotingGrid;
