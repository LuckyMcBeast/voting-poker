import { Component, lazy } from "solid-js";
import { Home } from "./components/Home";
import { useRoutes } from "@solidjs/router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:roomName",
    component: lazy(() => import("./components/VotingPoker")),
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);
  return <Routes />;
};

export default App;
