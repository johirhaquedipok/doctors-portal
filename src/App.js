import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AppointMent from "./Pages/AppointMent/AppointMent";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<AppointMent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
