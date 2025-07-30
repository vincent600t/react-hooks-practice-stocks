import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuy }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.length === 0 ? (
        <p>No stocks available.</p>
      ) : (
        stocks.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            onClick={() => onBuy(stock)} // Buy stock when clicked
          />
        ))
      )}
    </div>
  );
}

export default StockContainer;
