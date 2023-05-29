import Image from "next/image";
import shoe from "../../../public/shoe.png";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Rating,
} from "@material-tailwind/react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";
import Button from "@smarket/design/button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Choices from "./Choices";
import BrandImages from "./Brandimages";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" py-5 p-1 overflow-y-hidden flex-col md:flex-row gap-6 flex justify-center">
      <BrandImages />
      <div className="w-[28rem] flex flex-col gap-8 px-2">
        <div className=" flex flex-col gap-3 ">
          <div className="flex items-center gap-4">
            <h4 className="font-semibold text-3xl">Jordan 4</h4>
            <span className="flex items-center justify-center rounded-xl bg-green-800  text-sm px-2 text-white">
              Best seeler
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="flex   text-sm items-center justify-center gap-[2px]">
              <p className=" font-medium">4.3</p>
              <span className=" text-xs bg-opacity-10 px-2 rounded-2xl bg-[#FF6026] text-[#FF6026]">
                Rate
              </span>
            </span>
            <span className="flex  text-sm items-center justify-center gap-[2px]">
              <p className=" font-medium">6755</p>
              <span className=" text-xs bg-opacity-10 px-2 rounded-2xl bg-[#FF6026] text-[#FF6026]">
                Reviews
              </span>
            </span>
            <span className="flex   text-sm items-center justify-center gap-[2px]">
              <p className=" font-medium">345</p>
              <span className=" text-xs bg-opacity-10 px-2 rounded-2xl bg-[#FF6026] text-[#FF6026]">
                Sold
              </span>
            </span>
          </div>
          <div className=" cursor-pointer flex items-end gap-2">
            <AiOutlineShop className=" text-2xl text-[#FF5722]" />
            <p className="text-sm font-ligth">Soes shop</p>
          </div>
        </div>

        <div className="flex items-center justify-between px-2">
          <h3 className=" text-3xl font-bold">$45,6</h3>
          <div className=" flex gap-3">
            <div className="flex items-center gap-1">
              <FiShare2 className=" font-bold text-xl text-[#FF5722]" />
              <p className=" text-sm">Share</p>
            </div>
            <Popover>
              <PopoverHandler>
                <div className="flex cursor-pointer items-center gap-1">
                  <MdOutlineFavoriteBorder className=" text-xl text-[#FF5722]" />
                </div>
              </PopoverHandler>
              <PopoverContent>
                <Rating value={4} />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Choices />
        <div className="flex flex-col gap-2">
          <p>Quantity</p>
          <div className="flex rounded items-center w-[10.5rem]">
            <span
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
              className="h-8 w-14 rounded-l bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              -
            </span>
            <span className="h-8 w-14 flex items-center justify-center border-[#FF6026] border-opacity-10  border">
              {quantity}
            </span>
            <span
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-14 rounded-r bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              +
            </span>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <div className="w-1/2">
            <Button
              className="flex justify-center items-center gap-3"
              fullWidth
            >
              <HiOutlineShoppingCart className=" text-lg" /> Add to card
            </Button>
          </div>
          <div className="w-1/2">
            <Button variant="outlined" fullWidth>
              Check out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
