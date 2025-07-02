import { Outlet } from "react-router";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
