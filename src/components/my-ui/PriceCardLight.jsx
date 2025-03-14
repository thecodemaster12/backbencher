import React from "react";

const PriceCardLight = ({title, body, best_price, duration, price_floor, price_int}) => {
  return (
    <div className="bg-white text-black px-5 py-10 rounded-xl mb-5 relative font-kanit">
      <div className="grid grid-cols-[80px_auto] gap-6">
        <button className="mt-2">
          <span className="px-4 py-3 rounded-md border border-gray-300">
            <i class="fa-solid fa-check text-gray-400"></i>
          </span>
        </button>
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <span className="text-black px-4 py-2 border text-sm border-[#222] rounded-full uppercase">
              {duration}
            </span>
          </div>
          <h4 className="uppercase text-2xl font-[500]">{title}</h4>
          <p className="text-black font-[300] text-lg">
            {body}
          </p>
        </div>
        <div className="absolute top-14 right-8">
          <p className="text-4xl">
          ${price_int}<span className="text-lg">{price_floor}</span>
          </p>
        </div>
      </div>
      {best_price 
        && 
        <p className="absolute -top-2 right-9 px-3 py-1 bg-[#ff9776] rounded-md uppercase font-[500] text-[12px]">
          Best Value
        </p>
       }
    </div>
  );
};

export default PriceCardLight;
