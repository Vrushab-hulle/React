import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log(cartItems);

  const handleCartItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="h-full mt-4">
      <div className="flex justify-start">
        <button
          onClick={handleCartItem}
          className="shadow-md bg-red-600 border mb-[10] w-[100] rounded-md text-white font-semibold "
        >
          Clear Cart
        </button>
      </div>
      <div className="h-full bg-gray-200">
        {/* main div */}
        <div className="flex justify-between ml-[10%] mr-[4%] shadow-lg pt-[2%]">
          {/* left side */}
          <div className="w-[60%] bg-white">
            <h1>logged in user</h1>
          </div>
          {/* right side */}
          <div className="w-[38%] bg-white pl-4 pr-4">
            {cartItems.map((item) => (
              <div className="flex justify-between">
                {/* left side */}
                <div className="w-[50%] pt-[10] font-sans text-sm font-semibold ">
                  {item.card.info.isVeg === 1 ? "🥦" : "🔺" + " "}{" "}
                  {item.card.info.name}
                </div>
                {/* right side */}
                <div className="pt-[10] text-gray-500 font-semibold font-mono">
                  ₹{""}
                  {item?.card?.info?.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </div>
              </div>
            ))}
            <div className="mt-[20] flex border items-start border-gray-400">
              <div className="w-[30%] flex justify-center">
                <input
                  className="pt-2 w-4 h-6 bg-gray-100 border-gray-300 rounded"
                  type="checkbox"
                ></input>
              </div>

              <div>
                <b>Opt in for No-contact Delivery</b> <br />
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </div>
            </div>
            <div className="mt-[20] h-[50] flex items-center justify-center cursor-pointer border border-dashed border-gray-400 bg-green-100">
              <div>% Apply Coupon</div>
            </div>
            {/* bill details div */}
            <div className="mt-[10] flex justify-between">
              {/* left side */}
              <div className="w-[50%] pt-[10] font-sans text-sm font-semibold ">
                Bill details
              </div>
              {/* right side */}
              <div className="pt-[10] text-gray-500 font-semibold font-mono">
                395
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
