import ProductDetail from "../../components/product/productDetail";
import ProductInfo from "../../components/product/productInfo";

export default function Product() {
  return (
    <div className="w-full overflow-hidden no-scrollbar  flex flex-col gap-4 items-center">
      <div className="w-full ">
        <ProductDetail />
      </div>
      <div className="w-full ">
        <ProductInfo />
      </div>
    </div>
  );
}
