"use client";

// export default function ProductError({ error }: { error: Error }) {
//   return (
//     <div className="text-center text-red-500 text-2xl">{error.message}</div>
//   );
// }

export default function ProductError(props: { error: Error }) {
  return (
    <div className="text-center text-red-500 text-2xl">
      {props.error.message}
    </div>
  );
}
