import React from "react";
import pricedata from "./pricedata.js";
import accordiandata from "./accordian.js";
import PriceCardDark from "../my-ui/PriceCardDark.jsx";
import PriceCardLight from "../my-ui/PriceCardLight.jsx";
import Accordian from "../my-ui/Accordian.jsx";

const Price = () => {
  return (
    <div className="bg-[#f3ecec]">
      <div className="container mx-auto">
        <div className="min-h-screen grid gap-14 grid-cols-2 place-content-center">
          {/* Header and Accordian */}
          <div className="">
            <h5 className="uppercase text-[#555] text-xl font-[500] mb-4">
              Pricing Table
            </h5>
            <h2 className="uppercase text-black text-5xl font-[700] mb-18">
              Be kind to your mind
            </h2>

            <Accordian />
          </div>

          <div className="">
            {/* Price Card */}
            {pricedata.map((price, i) => {
              if (price.theme === "dark") {
                return (
                  <PriceCardDark
                    key={i}
                    title={price.title}
                    body={price.body}
                    best_price={price.best_price}
                    price_int={price.price_int}
                    price_floor={price.price_floor}
                    duration={price.duration}
                  />
                );
              } else {
                return (
                  <PriceCardLight
                    key={i}
                    title={price.title}
                    body={price.body}
                    best_price={price.best_price}
                    price_int={price.price_int}
                    price_floor={price.price_floor}
                    duration={price.duration}
                  />
                );
              }
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Price;
