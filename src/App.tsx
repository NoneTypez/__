// import { useState } from 'react'
import "./App.css";
import LeftSide from "./coompositions/leftSide/LeftSide";
import RightSide from "./coompositions/rightSide/RightSide";
import TableComposition from "./coompositions/tableComposition/TableComposition";
import { testData } from "./models";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LeftSide />
      <RightSide children={<TableComposition data={testData} />} />
    </>
  );
}

export default App;
