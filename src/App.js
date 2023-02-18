import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./components/fontawesomeIcons";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState();

  (function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
      let myWidth = window.innerWidth;
      setWidth((width) => (width = myWidth));

      // your size calculation code here
      console.log(myWidth);
    }
  })();

  return (
    <div className="App">
      {width < 600 ? <></> : <Sidebar />}
      <Main width={width} />
    </div>
  );
}

export default App;
