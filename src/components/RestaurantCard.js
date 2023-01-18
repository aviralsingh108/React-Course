import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  console.log("inside component", {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  });
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} ⭐ </h4>
      <h2>{name}</h2>
    </div>
  );
};

export default RestaurantCard;
