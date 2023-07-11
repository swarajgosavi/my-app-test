import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./Navbar";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
