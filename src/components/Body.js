import { restauList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      {restauList.map((item) => (
        <RestaurantCard {...item.data} key={item.data.id} />
      ))}
    </div>
  );
};

export default Body;
