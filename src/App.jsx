import { Outlet } from "react-router-dom";
import HeroSection from "./components/layout/HeroSection";

function App() {
  return (
    <div>
      <HeroSection/>
      <Outlet />
    </div>
  );
}

export default App;
