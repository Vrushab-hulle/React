import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex  p-2 m-2 justify-between border-black border-b-2 pb-[50]"
        >
          <div className="flex flex-col items-start">
            <div className="w-[100] text-start">
              <span className=" text-xs mr-[10]">
                {item.card.info.isVeg === 1 ? "🟢" : "🔴"}
              </span>
              <span className="p-[5]  text-red-500 text-sm font-semibold">
                {item.card.info.ribbon.text}
              </span>
            </div>
            <span className="font-mono font-semibold text-gray-700">
              {item?.card?.info?.name}
            </span>
            <span className="font-semibold">
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item.card.info.defaultPrice / 100}
            </span>
            <span className="text-left text-sm text-gray-500 w-[400] mt-[10]">
              {item.card.info.description}
            </span>
          </div>
          <div className="flex justify-end  w-[200] ">
            <div className="flex  w-full  ">
              <div>
                {item.card.info?.imageId ? (
                  <img
                    src={LOGO_URL + item?.card?.info?.imageId}
                    className="rounded-md w-[300] border aspect-square "
                  />
                ) : null}
                <div className="flex justify-center items-baseline w-[200]">
                  <button
                    onClick={() => handleAddItems(item)}
                    className="shadow-md shadow-gray-500 -mb-[5rem] border border-gray-400 p-[4] w-[80] rounded-md bg-white text-green-600 font-bold "
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
