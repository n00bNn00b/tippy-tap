import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ResetPassWord from "./components/ResetPassWord/ResetPassWord";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPassWord />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
