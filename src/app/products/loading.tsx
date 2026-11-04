import ProductsLoadingCard from "./_components/LoadingCard";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto">
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
      </div>
    </div>
  );
}
