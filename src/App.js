import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AppointMent from "./Pages/AppointMent/AppointMent";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./RequireAuth/RequireAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="myreview" element={<MyReview />}></Route>
          <Route path="myhistory" element={<MyHistory />}></Route>
          <Route
            path="allusers"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
