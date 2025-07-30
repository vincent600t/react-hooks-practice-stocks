import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  onBuy,
  onSell,
  sortBy,
  setSortBy,
  filter,
  setFilter,
}) {
  return (
    <div>
      {/* SearchBar will handle sort and filter controls */}
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={onBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
