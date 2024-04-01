
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Navbar> </Navbar>
      <Outlet />
      <Footer> </Footer>
    </>
  );
}

export default App;
