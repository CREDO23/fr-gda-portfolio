import { Select } from "antd";
import { useEffect, useState } from "react";

export default function Choices({ colors, sizes, others }: IChoicesProps) {
  const [color, setColor] = useState(colors?.items[0]);
  const [size, setSize] = useState(sizes?.items[0]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    setOther(
      others?.map((ch) => {
        const newItem = {};
        newItem["label"] = ch.label;
        newItem["value"] = ch.items[0];
        newItem["key"] = ch.key;
        return newItem;
      })
    );
  }, [others]);

  return (
    <div className=" flex flex-col gap-3">
      {colors && (
        <div className="flex flex-col gap-2">
          <p className="font-light  opacity-70 text-sm">Colors:</p>
          <div className="flex gap-1 ">
            {colors?.items?.map((col, key) => (
              <div
                key={key}
                onClick={() => setColor(col)}
                className={`w-8 h-8 p-[2px] cursor-pointer  ${
                  col == color
                    ? "border border-[#FF5722] border-opacity-50"
                    : ""
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
      )}
      {sizes && (
        <div className="flex flex-col gap-2">
          <p className="font-light  opacity-70 text-sm">Size:</p>
          <div className="flex gap-1 flex-wrap ">
            {sizes.items.map((siz, key) => (
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
      )}

      <div className="flex w-full justify-between gap-y-2 items-center flex-wrap">
        {others?.map((ch, key) => {
          const defaultvalue = other?.filter(
            (other) => other.label === ch.label
          )[0]?.value;

          if (defaultvalue)
            return (
              <div key={key} className="flex w-[45%] flex-col gap-2">
                <p className="font-light  opacity-70 text-sm">{ch.label}:</p>
                <Select
                  bordered={false}
                  onChange={(e) => {
                    const updated = other.map((item) => {
                      if (item.label === ch.label) {
                        item.value = e;
                      }

                      return item;
                    });

                    setOther(updated);
                  }}
                  defaultValue={{ value: defaultvalue }}
                  placeholder={`Select a ${ch.label}`}
                  labelInValue={false}
                  options={ch?.items?.map((item) => {
                    const newItem = {};

                    newItem["value"] = item;

                    return newItem;
                  })}
                  className="w-full border rounded"
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}
