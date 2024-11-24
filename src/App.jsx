import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
