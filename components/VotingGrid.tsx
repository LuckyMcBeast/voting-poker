import { InfinityVote, NumberVote, SkipVote } from "./VoteButtons";

const numberGridStyle : string = "h-5/6 grid grid-row-3 grid-cols-3 place-content-evenly place-items-center text-2xl"

const VotingGrid: React.FC = () => {
  return (
    <div className="w-[50vh] h-[75vh]">
      <div className={numberGridStyle}>
        <NumberVote number={0.5} />
        <NumberVote number={1} />
        <NumberVote number={2} />
        <NumberVote number={3} />
        <NumberVote number={5} />
        <NumberVote number={8} />
        <NumberVote number={13} />
        <NumberVote number={21} />
        <InfinityVote />
      </div>
      <SkipVote />
    </div>
  );
};

export default VotingGrid;
