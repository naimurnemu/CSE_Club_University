import { Outlet } from "react-router-dom";
import "./App.css";
import { Banner, Benefits, Events, Footer, Team, Tutorial } from "./components";

function App() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}

export default App;
