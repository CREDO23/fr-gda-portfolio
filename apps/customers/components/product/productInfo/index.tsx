import Reviews from "./Reviews";
import Description from "./Description";

export default function ProductInfo() {
  return (
    <div className="w-full flex flex-col  gap-10 px-3 md:px-10 py-2">
      <div className="">
        <Description />
      </div>
      <div className="">
        <Reviews />
      </div>
    </div>
  );
}
