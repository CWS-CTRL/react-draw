import React, { useState, useEffect } from "react";
import Exhibitions from "./views/exhibition";

const App = () => {
  return <div className="grid grid-cols-1 place-content-center">
    <Exhibitions />
  </div>
};

export default App;
