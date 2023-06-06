import Product from "./product";
import Footer from "@smarket/design/footer";

export default function Index() {
  return (
    <div
      className={` overflow-auto no-scrollbar h-screen  items-center justify-center  w-screen  gap-5`}
    >
      <Product />
      <Footer />
    </div>
  );
}
