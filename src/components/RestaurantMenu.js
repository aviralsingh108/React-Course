import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
    console.log(json.data);
  }

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurantMenu.name}</h2>
        <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} />
        <h3>{restaurantMenu.area}</h3>
        <h3>{restaurantMenu.city}</h3>
        <h3>{restaurantMenu.avgRating}</h3>
        <h3>{restaurantMenu.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(Object.values(restaurantMenu.menu.items))}
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
