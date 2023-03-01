import { useSelector } from "react-redux";
import store from "../utils/store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      {cartItems.map((item) => (
        <h1 className="font-bold p-2 m-2 text-xl">❤ {item.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
