import { Select, Option } from "@material-tailwind/react";

export default function Choices() {
  return (
    <div className=" flex items-center flex-col gap-5">
      <Select
        defaultChecked
        color="deep-orange"
        className="border-none"
        label="Color"
      >
        <Option defaultChecked>
          <div className="h-6 w-6 bg-[#54B258] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#F69089] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#2B92EB] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#D2A8FF] rounded-full "></div>
        </Option>
      </Select>

      <Select color="deep-orange" className="border-none" label="Size">
        <Option>XS</Option>
        <Option>SM</Option>
        <Option>M</Option>
        <Option>XL</Option>
        <Option>XXL</Option>
      </Select>
      <Select color="deep-orange" className="border-none" label="Color">
        <Option>
          <div className="h-6 w-6 bg-[#54B258] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#F69089] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#2B92EB] rounded-full "></div>
        </Option>
        <Option>
          <div className="h-6 w-6 bg-[#D2A8FF] rounded-full "></div>
        </Option>
      </Select>
    </div>
  );
}
