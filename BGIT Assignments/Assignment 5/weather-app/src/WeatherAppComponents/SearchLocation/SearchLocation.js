// SearchComponent.js
import React, { useState } from "react";

const SearchLocation = () => 
function SearchLocation({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city); // This function is connected to the WeatherApp component and data is retrieved from it depending on the city that is searched for.

  return ( // Create a search bar/form
    <div className="search-bar">
      <input 
        type="text"
        placeholder="Search City"
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchLocation;
