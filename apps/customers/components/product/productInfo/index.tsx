import Reviews from "./Reviews";
import Description from "./Description";

export default function ProductInfo() {
  return (
    <div className="w-full flex flex-col px-3 md:px-8  gap-10  py-5">
      <div className="">
        <Description />
      </div>
      <div className="">
        <Reviews />
      </div>
    </div>
  );
}
