// import { useState } from 'react'
import "./App.css";
import Button from "./components/button/Button";
import SvgIcon from "./components/icon/SvgIcon";
import { icons } from "./models";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Button
        text="BUTTON"
        icon={
          <SvgIcon
            mainStyle="svg"
            xlmns={icons.xlmn}
            viewbox={icons.viewBox}
            iconPath={icons.dashboard}
          />
        }
        appearance="blue"
      />
    </>
  );
}

export default App;
