import { IMG_CDN_URL } from "../config";

const FoodItem = ({ cloudinaryImageId, name, price, description }) => {
  return (
    <div className="w-56 h-72 p-2 mt-6 m-4 shadow-lg bg-purple-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h2>{description}</h2>
      <h2>Rupees: {price}</h2>
    </div>
  );
};

export default FoodItem;
