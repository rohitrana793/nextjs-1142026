"use client";

import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "@/redux/products/productActions";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import ProductsLoading from "../loading";
import { toast } from "react-toastify";
import { resetDeleteSuccess } from "@/redux/products/productSlice";

const ProductsGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, products, error, deleteSuccess, query } = useSelector(
    (state: RootState) => state.product,
  );

  if (loading) <ProductsLoading />;

  if (error) {
    throw new Error(error);
  }

  useEffect(() => {
    dispatch(getAll(query));
  }, [dispatch, deleteSuccess, query]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1500 });
    }

    if (deleteSuccess) {
      toast.success("Product deleted successfully", {
        autoClose: 1500,
        onClose: () => dispatch(resetDeleteSuccess()),
      });
    }
  }, [error, deleteSuccess, dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
