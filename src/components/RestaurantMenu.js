import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurant(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="flex p-2 m-2 space-x-10">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurantMenu.name}</h2>
        <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} />
        <h3>{restaurantMenu.area}</h3>
        <h3>{restaurantMenu.city}</h3>
        <h3>{restaurantMenu.avgRating}</h3>
        <h3>{restaurantMenu.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1 className="font-bold">Menu</h1>

        <ul data-testid="menu">
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li className="m-2" key={item.id}>
              {item.name} -
              <button
                data-testid="add-btn"
                className="pl-2 pr-2 ml-2 font-bold text-2xl rounded-full bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                +
              </button>
              <button
                className="pl-2 pr-2 ml-2 w-8 font-bold text-2xl rounded-full bg-green-50"
                onClick={() => removeFoodItem(item)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
