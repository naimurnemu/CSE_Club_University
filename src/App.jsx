import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}

export default App;