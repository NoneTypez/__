// import { useState } from 'react'
import "./App.css";
import Sidebar from "./coompositions/sideBar/Sidebar";
import Window from "./coompositions/window/Window";
import { WindowAppearance } from "./enums";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Window appearance={WindowAppearance.main} />
    </>
  );
}

export default App;
