import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  let pathname = window.location.pathname;

  return (
    <div className="mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      {pathname == "/chat" ? "" : <Footer />}
    </div>
  );
}

export default App;
