import Image from "next/image";
import ProductCard from "../_components/Card";
import { getProductById } from "@/api/product";
import headphone from "@/assets/images/headphone.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa6";

type ProductByIdType = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductById({ params }: ProductByIdType) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-around items-center py-10">
        <div className="w-1/2 flex justify-center p-5">
          <Image src={headphone} alt="" className="w-2/3 h-auto border p-5" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-gray-400">{product.brand}</p>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            atque explicabo ducimus, esse facere, id dolorum temporibus totam
            quae sapiente sequi! Architecto eligendi ullam sit repellat animi
            iure maxime reiciendis? Cumque illo enim culpa ex sapiente sunt
            officiis voluptatum maxime blanditiis accusamus! Sequi officiis
            deserunt hic ratione tempore incidunt ipsa dolor minus saepe ex odit
          </p>
          <h3 className="text-3xl my-8 text-red-500">
            ${product.price}
            <span className="text-xl text-black ml-3 line-through">
              ${product.price / 0.8}
            </span>
          </h3>
          <hr />
          <div className="pt-8 text-yellow-500 flex">
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStarHalf className="text-xl" />
            <p className="text-black">| 215 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
