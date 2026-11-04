"use client";

import { add } from "@/redux/products/productActions";
import { resetAddSuccess } from "@/redux/products/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, addSuccess } = useSelector(
    (state: RootState) => state.product,
  );

  const onSubmit = async (data: Product) => {
    dispatch(add(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1500 });
    }
    if (addSuccess) {
      toast.success("Product Added Successfully", {
        autoClose: 1500,
        onClose: () => dispatch(resetAddSuccess()),
      });
      reset();
      router.push("/products");
    }
  }, [dispatch, addSuccess, error]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-5 max-w-xl sm:mt-5"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              name="name"
              id="name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <p className="text-red-500 mt-2 ml-2">
              {errors.name && <span>{errors.name.message}</span>}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="category"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Category
          </label>
          <div className="mt-1">
            <input
              type="text"
              {...register("category", {
                required: "Category name is required",
              })}
              name="category"
              id="category"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <p className="text-red-500 mt-2 ml-2">
              {errors.category && <span>{errors.category.message}</span>}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="brand"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Brand
          </label>
          <div className="mt-1">
            <input
              type="text"
              {...register("brand", {
                required: "Brand name is required",
              })}
              name="brand"
              id="brand"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <p className="text-red-500 mt-2 ml-2">
              {errors.brand && <span>{errors.brand.message}</span>}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Price
          </label>
          <div className="mt-1">
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
              })}
              name="price"
              id="price"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
            <p className="text-red-500 mt-2 ml-2">
              {errors.price && <span>{errors.price.message}</span>}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="submit"
          className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? "Addding..." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
