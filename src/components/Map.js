import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../leaflet/leaflet.css";

function Map() {
  const startPosition = [53.15, 10.25];

  return (
    <MapContainer center={startPosition} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
