import ProductDetail from "../components/product/productDetail";
import ProductCard from "@smarket/design/productCard/Card";

export default function Index() {
  return (
    <div className="flex  items-center justify-center  w-screen  flex-col gap-5">
      <ProductCard />
      <ProductDetail />
    </div>
  );
}
