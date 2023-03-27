import React, { useState, useEffect } from "react";
import Exhibitions from "./views/exhibition";

import svgImportControls from "./utils/svgImportControls";
const iconsInfo = svgImportControls.batchImportLoading();

const App = () => {
  return <div className="grid grid-cols-1 place-content-center">
    <Exhibitions iconsInfo={ iconsInfo} />
  </div>
};

export default App;
