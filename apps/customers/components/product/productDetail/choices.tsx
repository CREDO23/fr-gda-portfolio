import { Select } from "antd";
import { useState } from "react";
export default function Choices() {
  const colors = [
    "#913913",
    "#558a86",
    "#8d7ca9",
    "#105523",
    "#a2c682",
    "#484fbe",
  ];
  const sizes = [
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
  ];

  const [color, setColor] = useState("#558a86");
  const [size, setSize] = useState(sizes[0]);

  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <p className="font-light">Colors:</p>
        <div className="flex gap-1 ">
          {colors.map((col, key) => (
            <div
              key={key}
              onClick={() => setColor(col)}
              className={`w-8 h-8 p-1 cursor-pointer  ${
                col == color ? "border border-[#FF5722] border-opacity-50" : ""
              }`}
            >
              <div
                style={{ backgroundColor: col }}
                className="w-full h-full rounded bg-[${color}]"
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-light">Size:</p>
        <div className="flex gap-1 flex-wrap ">
          {sizes.map((siz, key) => (
            <div
              key={key}
              onClick={() => setSize(siz)}
              className={`h-8 w-10 cursor-pointer  rounded-sm ${
                siz == size ? "border border-[#FF5722] border-opacity-50" : ""
              }  flex items-center justify-center text-sm bg-gray-100 text-gray-600`}
            >
              {siz}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center flex-wrap">
        <div className="flex w-[45%] flex-col gap-2">
          <p className="font-light">Model:</p>
          <Select
            defaultValue={{ value: "25gh" }}
            placeholder="Select a model"
            labelInValue={false}
            options={[{ value: "25gh" }, { value: "23gh" }, { value: "93gh" }]}
            className="w-full"
          />
        </div>
        <div className="flex w-[45%] flex-col gap-2">
          <p className="font-light">Inches:</p>
          <Select
            defaultValue={{ value: "25gh" }}
            placeholder="Select a model"
            labelInValue={false}
            options={[{ value: "25.3" }, { value: "14" }, { value: "32" }]}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
