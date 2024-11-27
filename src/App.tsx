import { Outlet } from "react-router-dom";
import Header from "./pages/layouts/Header/Header";
import "./App.scss";

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
