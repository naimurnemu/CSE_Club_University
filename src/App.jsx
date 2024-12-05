import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  const location = useLocation();
  let pathname = location?.pathname;

  return (
    <div className="mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      {pathname == "/chat" ? null : <Footer />}
    </div>
  );
}

export default App;
