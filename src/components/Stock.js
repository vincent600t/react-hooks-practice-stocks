import React from "react";

function Stock({ stock, onClick }) {
  return (
    <div className="card mb-2" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-body">
        <h5 className="card-title">{stock.name} ({stock.ticker})</h5>
        <p className="card-text">${stock.price}</p>
        <small className="text-muted">{stock.type}</small>
      </div>
    </div>
  );
}

export default Stock;
