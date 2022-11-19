import React from "react";
import Header from "./components/Header";
import Slides from "./components/Slides";
import { mainText } from "./utility/constants";


function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <br />
      <Slides slides={mainText} />
    </div>
  );
}

export default App;
