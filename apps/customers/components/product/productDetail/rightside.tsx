import { useState } from "react";
import { discountData } from "../../../data/discount";
import { shipCosts } from "../../../data/shippingCost";
import paypay from "../../../public/paypal.png";
import visa from "../../../public/visaIcon.png";
import mastercard from "../../../public/masterCard.png";
import Image from "next/image";

export default function RightSIde() {
  const availability = true;

  const [discount, setDiscount] = useState(0);

  return (
    <div className="w-[28rem] p-3 gap-3 divide-y flex flex-col">
      <p className=" font-medium text-lg">Product Info</p>
      <div className="flex w-full pt-1 items-center gap-2">
        <p className="">Aailability - </p>{" "}
        <span
          className={` border ${
            availability
              ? " bg-green-100 text-green-600"
              : " bg-red-50 text-red-500"
          } font-light text-xs rounded-lg px-2`}
        >
          {availability ? "In stock" : "Out of stock"}
        </span>
      </div>
      <div className="flex pt-1 w-full items-center gap-2">
        <p className="">Min order: </p>{" "}
        <span className=" font-light text-sm">10</span>
      </div>
      <div className="w-full pt-1 flex gap-1 flex-col">
        <p className="">Discount info:</p>
        {discountData && (
          <ul className=" flex flex-wrap gap-3 ml-3">
            {discountData.map((disc, key) => (
              <li
                key={key}
                onClick={() => setDiscount(key)}
                className={`border cursor-pointer ${
                  discount == key ? "border-[#FF6026]" : ""
                }  rounded p-[4px] flex flex-col font-light text-sm`}
              >
                <span>{disc.disCase} pcs</span>
                <span className=" self-center font-normal">{disc.price}$</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col pt-1 w-full gap-2">
        <p className="">Shipping info:</p>
        <ul className="ml-3 gap-[6px]  flex flex-col">
          <li className="flex text-sm w-full items-center gap-2">
            <p className=" opacity-60">Zones: </p>{" "}
            <span className=" font-light ">Everywhere in DRC</span>
          </li>
          <li className="flex text-sm w-full items-center gap-2">
            <p className=" opacity-60">Delivery time &#128337;: </p>{" "}
            <span className=" font-light ">2 days</span>
          </li>
          <li className="flex flex-col text-sm w-full gap-2">
            <p className=" opacity-60">Rates and costs: </p>
            {shipCosts && (
              <ul className=" flex flex-wrap gap-3 ml-3">
                {shipCosts.map((shipCase, key) => (
                  <li
                    key={key}
                    className={`border gap-1 rounded p-[4px] flex font-light text-sm`}
                  >
                    <span>{shipCase.shipCostCase}:</span>
                    <span className=" self-center font-normal">
                      {shipCase.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="flex text-sm w-full items-center gap-2">
            <p className=" opacity-60">Refund & Returns: </p>
            <span className=" font-light ">Eligible</span>
          </li>
        </ul>
      </div>
      <div className="w-full pt-1 flex gap-1 flex-col">
        <p className="">Payments methods:</p>
        {discountData && (
          <div className=" flex flex-wrap gap-3 ml-3">
            <span className="h-6 border p-1 w-14">
              <Image className="w-full h-full" alt="" src={visa} />
            </span>
            <span className="h-6 border p-1 w-14">
              <Image className="w-full h-full" alt="" src={mastercard} />
            </span>
            <span className="h-6 border p-1 rounded-sm w-14">
              <Image className="w-full h-full" alt="" src={paypay} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
