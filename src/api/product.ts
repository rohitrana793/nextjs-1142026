import config from "@/config";
import { Product, ProductsQuery } from "@/types/product";
import axios from "axios";

const getAllProducts = async ({
  limit = "10",
  sort = JSON.stringify({ createdAt: -1 }),
  filters = {},
}: ProductsQuery) => {
  const products = await axios.get(
    `${config.apiUrl}/api/products?limit=${limit || 10}&sort=${sort}&filters=${JSON.stringify(filters)}`,
  );
  return products;
};

const getProductById = async (id: String) => {
  const products = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return products.data;
};

const addProduct = async (data: Product) => {
  const token = localStorage.getItem("authToken");
  const products = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return products;
};

const deleteProduct = async (id: string) => {
  const token = localStorage.getItem("authToken");
  const product = await axios.delete(`${config.apiUrl}/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return product;
};

export { getAllProducts, getProductById, addProduct, deleteProduct };
