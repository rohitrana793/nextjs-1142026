"use client";

import { setFilters, setLimit, setSort } from "@/redux/products/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const ProductsFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { query } = useSelector((state: RootState) => state.product);

  const selectLimit = (limit: string) => {
    // console.log("limit", limit);
    dispatch(setLimit(limit));
  };

  const selectSort = (sortBy: string) => {
    dispatch(setSort(sortBy));
  };

  const filterByName = (value: string) => {
    dispatch(setFilters({ name: value }));
  };

  const filtersByCategory = (value: string) => {
    dispatch(setFilters({ category: value }));
  };

  return (
    <div className="py-5 px-3 my-5 border border-dashed rounded-xl flex justify-start">
      <div className="mx-5">
        <label htmlFor="limit">Limit:</label>
        <select
          name="limit"
          id="limit"
          value={query.limit}
          className="ml-3 border"
          onChange={(e) => selectLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="mx-5">
        <label htmlFor="limit">Sort By:</label>
        <select
          name="sort"
          id="sort"
          className="ml-3 border"
          onChange={(e) => selectSort(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>Price: Ascending</option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: Descending
          </option>
        </select>
      </div>
      <div className="mx-5">
        <label htmlFor="filtersByName">Name:</label>
        <input
          type="text"
          name="filtersByName"
          value={query?.filters?.name}
          className="px-2 ml-3 border"
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>
      <div className="mx-5">
        <label htmlFor="filtersByCategory">Category:</label>
        <input
          type="text"
          name="filtersByCategory"
          value={query?.filters?.Category}
          className="px-2 ml-3 border"
          onChange={(e) => filtersByCategory(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
