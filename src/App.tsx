import { Outlet } from "react-router";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <div className="flex-1" />

      <Footer />
    </div>
  );
}

export default App;
