import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-9/12 mx-auto my-2 bg-gray-100 border shadow-md p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold font-mono text-pretty">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Wrapper div for transition effect */}
        <div
          className={`transition-all duration-990 ease-in-out overflow-hidden ${
            showItems ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {showItems && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
