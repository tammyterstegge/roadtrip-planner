import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
