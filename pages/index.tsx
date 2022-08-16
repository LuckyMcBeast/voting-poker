import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen grid place-content-center text-center gap-1">
      <div className="w-60">
          <h1 className="text-2xl font-semibold">Agile Voting Poker</h1>
      </div>
      <form className="w-60 flex flex-col gap-2">
        <div className="text-center">Enter Your Name</div>
          <input type="text" name="name" className="bg-gray-700 border-0 rounded-md text-center text-teal-200"/>
      <div className="w-60 flex justify-center">
        <input type="submit" value="Let's Do This!" className="border border-slate-500 rounded-md w-40 bg-slate-900"/>
      </div>
      </form>
      <a href="https://mcullenm.dev" className="pt-2 text-teal-200">mcullenm.dev</a>
    </div>
  );
};

export default Home;
