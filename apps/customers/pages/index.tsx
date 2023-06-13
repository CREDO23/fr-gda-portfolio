import { useState } from "react";
import Hero from "../components/home/hero";
import Layout from "../components/layouts";
import Product from "@smarket/design/productCard/Card";
import Input from "@smarket/design/input";
import ProductFilter from "../components/home/ProductFilter";
import { Modal } from "antd";
import { FaFilter } from "react-icons/fa";

export default function Index() {
  const [searchOption, setSearchoption] = useState(0);

  const options = ["Products", "Shops"];

  const [modal2Open, setModal2Open] = useState(false);

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center">
        <Hero />
        <Modal
          okButtonProps={{ style: { background: "#ff5722" } }}
          okText="Apply filters"
          cancelText="Reset"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div className="flex w-full h-full items-center justify-center">
            <ProductFilter />
          </div>
        </Modal>
        <div className="w-full my-3">
          <div className="w-full sticky top-8  mb-8 left-0 bg-white z-10 py-8  flex items-center flex-col">
            <ul className="flex cursor-pointer items-center justify-center gap-3">
              {options.map((option, key) => (
                <li
                  key={key}
                  onClick={() => setSearchoption(key)}
                  className={`${
                    searchOption == key
                      ? "text-deep-orange-400 font-medium"
                      : " font-light"
                  } `}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="w-full md:w-5/12 px-3">
              <Input
                addonBefore={
                  <FaFilter
                    className=" hover:text-deep-orange-400 cursor-pointer"
                    onClick={() => setModal2Open(true)}
                  />
                }
                type="search"
                size="large"
                placeholder="Type here to search ..."
              />
            </div>
          </div>
          <div className="w-full flex gap-2  justify-center flex-wrap ">
            {[...new Array(10)].map((_item, key) => (
              <Product key={key} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
