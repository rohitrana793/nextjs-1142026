import Hero from "@/components/Hero";
import AuthLayout from "../layout/AuthLayout";
import ProductsGrid from "./products/_components/Grid";
import Features from "@/components/Features";
import Image from "next/image";
import electronics from "../assets/images/electronics.jpg";

export default function Home() {
  return (
    <div className="">
      <AuthLayout>
        <Hero />
        <Features />
        <div className="bg-white py-10">
          <div className="container mx-auto">
            <h2 className="text-center text-5xl font-semibold mb-10">
              Our Products
            </h2>
            <ProductsGrid />
          </div>
        </div>
        <div className="fixed top-0 left-0 -z-10">
          <Image src={electronics} alt="electronics" />
        </div>
      </AuthLayout>
    </div>
  );
}
