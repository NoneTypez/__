import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./compositions/sideBar/Sidebar";
import Window from "./compositions/window/Window";
import Dashboard from "./compositions/pages/dashboard/dashboard";
import ErrorPage from "./compositions/pages/error/ErrorPage";

function App() {
  return (
    <Router>
      <Sidebar />
      <Window>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Window>
    </Router>
  );
}

export default App;
