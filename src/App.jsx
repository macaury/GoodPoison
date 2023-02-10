import React from "react";

import Nav_bar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Pest from "./components/PestLibrary";

function App() {
  return (
    <>
      <Nav_bar />
      <Home />
      <Pest />
    </>
  );
}

export default App;
