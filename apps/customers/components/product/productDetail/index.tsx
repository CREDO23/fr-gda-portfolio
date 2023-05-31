import { Typography } from "@material-tailwind/react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";
import Button from "@smarket/design/button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import BrandImages from "./Brandimages";
import Choices from "./choices";
import { Popover, Rate } from "antd";
import { colors, size, others } from "../../../data/choices";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div className=" py-5 p-1 overflow-y-hidden flex-col md:flex-row gap-6 flex justify-center">
      <BrandImages />
      <div className="w-[28rem] flex flex-col gap-8 px-2">
        <div className=" flex flex-col  gap-3 ">
          <div className="flex flex-col gap-4">
            <div className="flex self-end items-center gap-8">
              <span className="flex  text-xs items-center justify-center gap-[2px]">
                <p className=" text-gray-700 font-medium">6755</p>
                <span className=" text-xs bg-opacity-10 px-2 rounded-2xl bg-[#FF6026] text-[#FF6026]">
                  Reviews
                </span>
              </span>
              <span className="flex   text-xs items-center justify-center gap-[2px]">
                <p className="text-gray-700  font-medium">345</p>
                <span className=" text-xs bg-opacity-10 px-2 rounded-2xl bg-[#FF6026] text-[#FF6026]">
                  Sold
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-3xl">Jordan 4</h4>
                <div className=" flex gap-3">
                  <div className="flex cursor-pointer items-center gap-1">
                    <FiShare2 className=" font-bold text-xl text-[#FF5722]" />
                    <p className=" text-sm">Share</p>
                  </div>
                  <Popover
                    content={<Rate onChange={hide} value={4} />}
                    trigger={["click", "focus", "hover"]}
                    open={open}
                    placement="leftBottom"
                    onOpenChange={handleOpenChange}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <MdOutlineFavoriteBorder className=" text-xl text-[#FF5722]" />
                    </div>
                  </Popover>
                </div>
              </div>
              <div className=" cursor-pointer flex items-end gap-2">
                <AiOutlineShop className=" text-[#FF5722]" />
                <p className="text-sm text-gray-600 font-ligth">by Soes shop</p>
              </div>
            </div>
            <Typography className="font-normal w-5/6 ">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-3 ">
            <h3 className=" text-2xl font-light">$45,6</h3>{" "}
            <div className=" h-6 bg-gray-500 w-[1px]"></div>
            <Rate onChange={hide} disabled allowHalf value={3.5} />
          </div>
        </div>
        <Choices colors={colors} sizes={size} others={others} />
        <div className="flex flex-col gap-2">
          <p>Quantity</p>
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
    </div>
  );
}
