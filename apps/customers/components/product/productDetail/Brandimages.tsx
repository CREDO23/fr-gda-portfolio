import Image from "next/image";
import shoe from "../../../public/shoe.png";

export default function BrandImages() {
  return (
    <div className="w-[28rem] gap-1 flex flex-col items-center">
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
  );
}
