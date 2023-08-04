import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
