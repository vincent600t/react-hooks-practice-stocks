import React from "react";

function SearchBar({ sortBy, setSortBy, filter, setFilter }) {
  return (
    <div className="mb-3">
      <strong>Sort by:</strong>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="alphabetical"
          name="sort"
          checked={sortBy === "alphabetical"}
          onChange={() => setSortBy("alphabetical")}
        />
        Alphabetically
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={sortBy === "price"}
          onChange={() => setSortBy("price")}
        />
        Price
      </label>

      <br />
      <label style={{ marginTop: "10px", display: "block" }}>
        <strong>Filter:</strong>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
