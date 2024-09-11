import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log(cartItems);

  const handleCartItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-4">
      <h1 className="font-bold font-mono">Cart</h1>
      <button
        onClick={handleCartItem}
        className="shadow-md bg-red-600 border mb-[10] w-[100] rounded-md text-white font-semibold "
      >
        Clear Cart
      </button>
      <div>
        {cartItems.map((item) => (
          <div className="bg-gray-300 flex justify-around w-full">
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price / 100}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
