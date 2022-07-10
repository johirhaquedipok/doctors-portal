import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AppointMent from "./Pages/AppointMent/AppointMent";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./RequireAuth/RequireAuth";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <AppointMent />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
