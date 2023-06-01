import Image from "next/image";
import shoe from "../../../public/shoe.png";
import { CiStar } from "react-icons/ci";
import { Rate } from "antd";

export default function leftSide() {
  return (
    <div className="w-[28rem] gap-1 flex flex-col items-center">
      <div className="w-full gap-1 flex flex-col items-center">
        <div className="w-full overflow-hidden bg-gray-100 h-96">
          <Image className="h-full" src={shoe} alt="" />
        </div>
        <div className="flex no-scrollbar gap-1 overflow-x-auto">
          {[...new Array(10)].map((el, key) => (
            <Image
              key={key}
              className="border h-24 w-24 bg-gray-100 rounded gap-0.5 "
              src={shoe}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-full h-52  gap-5 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-1">
          <span className=" text-2xl text-gray-500">3.7</span>
          <Rate disabled allowHalf value={3.5} />
          <div className="flex items-center opacity-75 font-light text-sm gap-1">
            <span>Total:</span>
            <span>1234</span>
          </div>
        </div>
        <div className=" gap-[6px] flex flex-col items-center justify-center">
          <div className="h-4 flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <span className=" text-sm">5</span>{" "}
              <CiStar className=" text-lg" />
            </div>
            <div className="h-4 bg-white rounded-sm w-52">
              <div className="h-4 bg-[#AED581] rounded-sm w-[90%]"></div>
            </div>
          </div>
          <div className="h-4 flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <span className=" text-sm">4</span>{" "}
              <CiStar className=" text-lg" />
            </div>
            <div className="h-4 bg-white rounded-sm w-52">
              <div className="h-4 bg-[#D4E157] rounded-sm w-[100%]"></div>
            </div>
          </div>
          <div className="h-4 flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <span className=" text-sm">3</span>{" "}
              <CiStar className=" text-lg" />
            </div>
            <div className="h-4 bg-white rounded-sm w-52">
              <div className="h-4 bg-[#FFD54F] rounded-sm w-[50%]"></div>
            </div>
          </div>
          <div className="h-4 flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <span className=" text-sm">2</span>{" "}
              <CiStar className=" text-lg" />
            </div>
            <div className="h-4 bg-white rounded-sm w-52">
              <div className="h-4 bg-[#FFB74D] rounded-sm w-[30%]"></div>
            </div>
          </div>
          <div className="h-4 flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <span className=" text-sm">1</span>{" "}
              <CiStar className=" text-lg" />
            </div>
            <div className="h-4 bg-white rounded-sm w-52">
              <div className="h-4 bg-[#EF9A9A] rounded-sm w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
