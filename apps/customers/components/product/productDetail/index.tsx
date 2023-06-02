import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";
import Button from "@smarket/design/button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Gallery from "./Gallery";
import Choices from "./Choices";
import { Popover, Rate } from "antd";
import { colors, size, others } from "../../../data/choices";
import PurchaseInfo from "./PurchaseInfo";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState(0);

  const handleOpenRate = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <div className=" py-5 p-1 flex-wrap overflow-y-hidden flex-col md:flex-row gap-6 flex justify-center">
      <Gallery />
      <div className="w-[28rem] flex flex-col gap-5 px-2">
        <div className=" flex flex-col  gap-3 ">
          <div className="flex flex-col gap-4">
            <div className="flex self-end items-center gap-8">
              <div className="flex items-center justify-between">
                <div className=" flex gap-3">
                  <div className="flex cursor-pointer items-center gap-1">
                    <FiShare2 className=" font-bold text-xl text-[#FF5722]" />
                    <p className=" font-light text-sm">Share</p>
                  </div>
                  <Popover
                    content={
                      <span>
                        <Rate tooltips={desc} onChange={setRate} value={rate} />
                        {rate ? (
                          <span className="ant-rate-text">
                            {desc[rate - 1]}
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                    }
                    trigger={["click", "focus", "hover"]}
                    open={open}
                    placement="leftBottom"
                    onOpenChange={handleOpenRate}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <MdOutlineFavoriteBorder className=" text-xl text-[#FF5722]" />
                    </div>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-3xl">Jordan 4</h4>
              </div>
              <div className=" cursor-pointer flex items-end gap-2">
                <AiOutlineShop className=" text-[#FF5722]" />
                <p className="text-sm text-gray-600 font-ligth">by Soes shop</p>
              </div>
            </div>
            <p className=" font-light w-11/12">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-3 ">
            <h3 className=" text-2xl">$45,6 - 30.12$</h3>
          </div>
        </div>
        <Choices colors={colors} sizes={size} others={others} />
        <div className="flex flex-col gap-2">
          <p className="font-light">Quantity </p>
          <div className="flex rounded items-center w-[10.5rem]">
            <span
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
              className="h-8 w-14 hover:bg-opacity-30 cursor-pointer rounded-l bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              -
            </span>
            <span className="h-8 w-14 flex items-center justify-center border-[#FF6026] border-opacity-10  border">
              {quantity}
            </span>
            <span
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-14 cursor-pointer hover:bg-opacity-30 rounded-r bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              +
            </span>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <div className="w-1/2">
            <Button
              type="primary"
              block
              icon={<HiOutlineShoppingCart className=" text-lg" />}
              title="ADD TO CARD"
            />
          </div>
          <div className="w-1/2">
            <Button block title="CHECK OUT" />
          </div>
        </div>
      </div>
      <PurchaseInfo />
    </div>
  );
}
