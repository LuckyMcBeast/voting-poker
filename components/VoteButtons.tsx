interface VotingNumberProps {
  number: number;
}

export const NumberVote: React.FC<VotingNumberProps> = ({ number }) => {
  return (
    <div className="tealCircle">
      <p>{number}</p>
    </div>
  );
};

export const InfinityVote: React.FC = () => {
  return (
    <div className="tealCircle text-4xl">
      <p>{"\u221e"}</p>
    </div>
  );
};

export const SkipVote: React.FC = () => {
  return (
    <div className="flex place-content-center">
      <div className="tealCircle">
        <p>SKIP</p>
      </div>
    </div>
  );
};
