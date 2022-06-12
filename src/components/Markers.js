import React, { useState } from "react";

function Markers() {
  const [category, setCategory] = useState("Friend");
  const [title, setTitle] = useState("");
  const [coordinates, setCoordinates] = useState("");

  return (
    <div className="border-2 rounded-lg border-emerald-900 mx-auto my-4 w-1/2 p-4 space-y-6">
      <div>
        <label htmlFor="category">Select a Category:</label>
        <select name="category" id="category">
          <option value="Friend">Friend</option>
          <option value="Campsite">Campsite</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="coordinates">Coordinates: </label>
        <input type="text" id="coordinates" name="coordinates" />
      </div>
      <div className="text-right">
        <input type="submit" value="Save" className="submit" />
      </div>
    </div>
  );
}

export default Markers;
