export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
};

export type ProductsQuery = {
  limit?: string;
  sort?: string;
  filters?: {
    [key: string]: string;
  };
};
