import { restauList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchInput);
  });
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restauList);
  const [searchInput, setSearchInput] = useState("Doon");
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants.map((item) => (
          <RestaurantCard {...item.data} key={item.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
