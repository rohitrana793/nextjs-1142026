"use client";

export default function ProductsError(props: { error: Error }) {
  return (
    <div className="text-center text-red-500 text-2xl">
      {props.error.message}
    </div>
  );
}
