// import { useState } from 'react'
import Dashboard from "./coompositions/pages/dashboard/dashboard";
import Sidebar from "./coompositions/sideBar/Sidebar";
import Window from "./coompositions/window/Window";
import { WindowAppearance } from "./enums";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Window appearance={WindowAppearance.main} children={<Dashboard />} />
    </>
  );
}

export default App;
