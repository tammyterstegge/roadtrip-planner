import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  const startPosition = [53.15, 10.25];

  return (
    <div>
      <MapContainer center={startPosition} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
