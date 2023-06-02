import { Modal, Rate, Select } from "antd";
import { BiPencil } from "react-icons/bi";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";

export default function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-5 items-center  justify-center  ">
      <div className="w-full border-b border-gray-300 pb-3 gap-3 flex items-center flex-wrap justify-between">
        <h4 className=" font-medium text-2xl">Reviews</h4>
        <div className="flex font-light items-center justify-center gap-4">
          <span>Sorted By</span>
          <div className="w-32 bg-gray-100 rounded">
            <Select
              defaultValue={[{ value: "Newest" }]}
              options={[
                { value: "Newest" },
                { value: "5 ratings" },
                { value: "4 Ratingd" },
              ]}
              bordered={false}
              className="w-full border rounded"
            />
          </div>
        </div>
        <Modal
          title="New Review"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={360}
          footer={[
            <div className=" h-12 py-1  flex items-center justify-center gap-2 w-full"></div>,
          ]}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>Your rate</span>
              <Rate value={4} />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your testimony
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg border  dark:placeholder-gray-400 dark:text-white "
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
        </Modal>
        <div
          onClick={() => setOpen(true)}
          className="flex px-4 border transition-all    hover:text-deep-orange-400 items-center justify-center rounded-md py-2"
        >
          <div className="flex cursor-pointer  items-center justify-center gap-3">
            <BiPencil />
            <p className=" font-light">Add your review</p>
          </div>
        </div>
      </div>
      <div className="w-full gap-5 flex-wrap flex">
        {[...new Array(4)].map((item, key) => (
          <ReviewCard key={key} />
        ))}
      </div>
    </div>
  );
}
