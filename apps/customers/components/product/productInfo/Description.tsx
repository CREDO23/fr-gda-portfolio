export default function Description() {
  return (
    <div className="w-full  flex flex-col gap-5 items-center  justify-center  ">
      <div className="w-full border-b border-gray-300 pb-3 gap-3 flex items-center flex-wrap justify-between">
        <h4 className=" font-medium text-2xl">Description</h4>
      </div>
      <div className="w-full flex-wrap flex">
        <ul className="flex md:w-1/2 dot-style flex-col gap-2">
          <li className="flex items-center gap-3">
            <span className=" font-medium">Dimensions:</span>
            <p className=" font-light">23 x 23 * 3 m</p>
          </li>
          <li className="flex items-center gap-3">
            <span className=" font-medium">Number of seats:</span>
            <p className=" font-light">23 x 23 * 3 m</p>
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-light">Durable and comfortable shoes</p>
          </li>
          <li className="flex items-center gap-3">
            <span className=" font-medium">Materiels:</span>
            <p className=" font-light">23 x 23 * 3 m</p>
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-light">
              In the end, a smartphone is still just a smartphone; they only
              have so many capabilities, and there aren’t many significant
              distinctions between models. But this is where Apple’s marketing
              strategy, which emphasizes the product’s most valuable features,
              really shines.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <span className=" font-medium">Dimensions:</span>
            <p className=" font-light">23 x 23 * 3 m</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
