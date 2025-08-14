import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="relative">
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
