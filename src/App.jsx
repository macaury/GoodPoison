import React from "react";

import Nav_bar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Pest from "./components/PestLibrary";
import Garden from "./components/garden.jsx";
import WeedControl from "./components/weedcontrol.jsx";
import MakeDifferent from "./components/makeDifferent.jsx";
import OurTeam from "./components/OurTeam.jsx";

function App() {
  return (
    <>
      <Nav_bar />
      <Home />
      <Pest />
      <Garden />
      <WeedControl />
      <MakeDifferent />
      <OurTeam />
    </>
  );
}

export default App;
