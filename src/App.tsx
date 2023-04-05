import React from "react";
import Exhibitions from "./views/exhibition";

const App = () => {
    console.log("app");

    return <div className="grid grid-cols-1 place-content-center">
        <Exhibitions />
    </div>
};

export default App;
