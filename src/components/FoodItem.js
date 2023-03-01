import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";

const FoodItem = (props) => {
  console.log(props);
  const { cloudinaryImageId, name, price, description } = props;
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      <div className="w-56 h-80 p-2 mt-6 m-4 shadow-lg bg-purple-200">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h2>{description}</h2>
        <h2>Rupees: {price}</h2>
      </div>
      <div className="flex ml-20">
        <button
          className="pl-2 pr-2 ml-2 font-bold text-2xl rounded-full bg-green-50"
          onClick={() => {
            addFoodItem(props);
          }}
        >
          +
        </button>
        <button
          className="pl-2 pr-2 ml-2 w-8 font-bold text-2xl rounded-full bg-green-50"
          onClick={() => {
            removeFoodItem(props);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
