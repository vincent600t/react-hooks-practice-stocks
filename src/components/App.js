import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("none");
  const [filter, setFilter] = useState("All");

  // Fetch stocks from API
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  // Add stock to portfolio
  const handleBuy = (stock) => {
    if (!portfolio.find((item) => item.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  // Remove stock from portfolio
  const handleSell = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  // Sorting logic
  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "alphabetical") return a.ticker.localeCompare(b.ticker);
    return 0;
  });

  // Filtering logic
  const displayedStocks = sortedStocks.filter((stock) => {
    if (filter === "All") return true;
    return stock.type === filter;
  });

  return (
    <div>
      <Header />
      <MainContainer
        stocks={displayedStocks}
        portfolio={portfolio}
        onBuy={handleBuy}
        onSell={handleSell}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
