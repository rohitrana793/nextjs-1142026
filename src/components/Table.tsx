import { Product } from "@/types/product";
import Link from "next/link";

type ProductsTableType = {
  products: Product[];
};

const ProductsTable = ({ products }: ProductsTableType) => {
  return (
    <div className="w-10/12 mx-auto mt-5 px-8 py-5 border rounded-2xl">
      <table className="w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr key={prod.id}>
                <td className="text-center hover:text-blue-500">
                  <Link href={`/products/${prod.id}`}>{prod.id}</Link>
                </td>
                <td className="text-center">{prod.name}</td>
                <td className="text-center">{prod.price}</td>
                <td className="text-center">{prod.category}</td>
                <td className="text-center">{prod.brand}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
