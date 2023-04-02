import React from "react";
import Exhibitions from "./views/exhibition";
import highlightCode from "./utils/highlightCode";

const code = "123<br/>&nbsp;456"
console.log(highlightCode);


const App = () => {
    return <div className="grid grid-cols-1 place-content-center">
        <Exhibitions />
        {/* <div dangerouslySetInnerHTML={{ __html: code }}></div> */}
    </div>
};

export default App;
