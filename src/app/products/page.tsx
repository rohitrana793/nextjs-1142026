import AuthLayout from "../../layout/AuthLayout";
import ProductsFilter from "./_components/Filter";
import ProductsGrid from "./_components/Grid";
import Link from "next/link";

export default async function Product() {
  return (
    <AuthLayout>
      <div className="py-10">
        <div className="container mx-auto">
          <div className="flex justify-end my-3">
            <Link
              href="/products/add"
              className=" bg-slate-700 text-white py-1 px-3 rounded"
            >
              Add Product
            </Link>
          </div>
          <ProductsFilter />
          <ProductsGrid />
        </div>
      </div>
    </AuthLayout>
  );
}
