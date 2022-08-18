import { InfinityVote, NumberVote, SkipVote } from "../components/VoteButtons";
import VotingGrid from "../components/VotingGrid";




const VotingPoker = () => {
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
      <VotingGrid/>
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
