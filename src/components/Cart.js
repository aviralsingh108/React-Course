import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <div className="flex">
        <h1 className="font-bold text-3xl m-2 p-1">Cart Items</h1>
        <button
          className="bg-green-300 p-2 m-3 text-1xl"
          onClick={() => {
            return handleClearCart();
          }}
        >
          Empty Cart
        </button>
      </div>

      <div className="flex">
        {cartItems.map((item, index) => {
          return <FoodItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
