import React from "react";

function Header({ sortBy, setSortBy, filter, setFilter }) {
  return (
    <header>
      <h1 className="text-center">Flatiron Stock Exchange</h1>
      <div className="controls text-center" style={{ marginTop: "1rem" }}>
        <div>
          <strong>Sort By: </strong>
          <button onClick={() => setSortBy("price")}>Price</button>
          <button onClick={() => setSortBy("alphabetical")}>Alphabetical</button>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <strong>Filter: </strong>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
