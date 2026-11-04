"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import headphone from "@/assets/images/headphone.jpg";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { remove } from "@/redux/products/productActions";
import Modal from "@/components/modal";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  // const {} = useSelector((state: RootState) => state.product);

  function onClick(id?: string) {
    router.push(`/products/${id}`);
  }

  const onDeleteProduct = () => {
    setIsOpen(true);
  };

  const onConfirmDelete = async (id: string) => {
    dispatch(remove(id));
    setIsOpen(false);
  };

  return (
    <div className="py-5 h-full border border-dashed border-gray-800">
      <div className="flex justify-center mb-5">
        <Image
          src={headphone}
          alt=""
          height={200}
          className=""
          title={product.name}
        />
      </div>

      <p className="text-center font-semibold text-lg">$ {product.price}</p>

      <p className="text-center font-semibold text-xl">{product.name}</p>

      <p className="text-center">{product.brand}</p>

      <p className="text-center">{product.category}</p>

      <div className="flex justify-around items-center gap-5 mt-3">
        <button
          className="bg-black text-white px-3 py rounded cursor-pointer"
          onClick={() => onClick(product.id)}
        >
          Buy Now
        </button>
        <button
          className="py-2 px-3 rounded bg-red-500 text-white cursor-pointer"
          onClick={onDeleteProduct}
        >
          <FaTrash />
        </button>
        <Modal
          title="Are you sure?"
          content={`Are you sure you want to delete ${product.name}`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          actions={
            <>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded py px-3 bg-slate-500 text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirmDelete(product?.id)}
                className="rounded py px-3 bg-red-500 text-white cursor-pointer"
              >
                Delete
              </button>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
