import { Outlet } from "react-router-dom";

function App() {
  return <h1 className="text-6xl">{
    <Outlet />
  }</h1>;
}

export default App;
