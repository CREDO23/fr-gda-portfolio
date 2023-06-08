import ProductFilter from "../components/home/ProductFilter";
import Hero from "../components/home/hero";
import Layout from "../components/layouts";

export default function Index() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center">
        <Hero />
      </div>
    </Layout>
  );
}
