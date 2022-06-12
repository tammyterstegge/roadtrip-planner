import { Marker } from "react-leaflet";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Markers from "./components/Markers";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/markers" element={<Markers />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
