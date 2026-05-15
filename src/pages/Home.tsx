import { useEffect, useState } from "react";
import type { Product } from "../type";
import { API_URLS } from "../api-urls";
import { Card } from "../components/Card";

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(API_URLS.GET_PRODUCTS);

      const data: {
        products: Product[];
      } = await res.json();

      console.log("data", data?.products);
      setProducts(data?.products?.slice(0, 6));
    };

    fetcher();
  }, []);
  return (
    <div className="bg-neutral-100 min-h-screen flex items-center justify-center w-full">
      <header>
        <nav></nav>
      </header>
      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        {products && products?.length > 0
          ? products.map((productUnit, idx) => (
              <Card product={productUnit} currentIndex={idx} />
            ))
          : null}
      </div>
    </div>
  );
};
