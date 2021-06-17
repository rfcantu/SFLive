import React from "react";

import Navigation from "./components/navbar";
import SanFranciscoMap from "./components/map";
import Venues from "./components/venues";

const App = () => {
  return (
    <div>
      <Navigation />
      <SanFranciscoMap />
      <Venues />
    </div>
  );
};

export default App;
