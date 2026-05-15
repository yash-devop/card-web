import type { Product } from "../type";

type CardProps = {
  product: Product;
  currentIndex: number;
};
export const Card = ({ product, currentIndex }: CardProps) => {
  console.log("currentIndex", currentIndex);
  return (
    <div className="ring ring-neutral-400 rounded-t-lg group overflow-hidden flex flex-col relative">
      <div
        className={`overflow-hidden ${currentIndex === 0 ? "bg-red-400" : "bg-white"}`}
      >
        <img
          src={product?.images?.[0]}
          className="size-[400px] object-cover rounded-t-lg group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col gap-y-4 pt-4 px-4">
        <div className="absolute top-3 right-4 bg-blue-200 p-2">
          <h1>{product.title}</h1>
        </div>
        <span>{product?.description}</span>
      </div>
    </div>
  );
};
