import React from "react";
import PagesLayout from "@/components/PagesLayout";
import Image from "next/image";
import { StarIcon } from "@/assets/svg/Svg";
import formatInt from "@/utils/formatInt";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";

export default function HomePage({ products }: any) {
  const dispatch = useDispatch();

  const addItemIntoCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <PagesLayout>
        <section className="py-3 px-3 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14">
              {/* Stat Cards */}
              {products.map((product: any, index: number) => (
                <div className="flex flex-col gap-1 rounded-lg" key={index}>
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt="Title"
                      width={200}
                      height={300}
                      className="w-full h-[300px] border border-slate-600 rounded-lg"
                      priority
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      onClick={() => addItemIntoCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>

                  <div className="flex justify-between text-[#222222] text-sm">
                    <p className="text-base font-semibold capitalize line-clamp-1">
                      {product.title}
                    </p>
                    <p className="flex items-center gap-1">
                      <StarIcon />
                      <span>5.0</span>
                    </p>
                  </div>

                  <p className="text-[#717171] text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-[#717171] text-sm">Sept 12-23</p>
                  <div className="flex justify-between mt-[6px]">
                    <p className="text-[rgb(34,34,34)]">
                      <span className="font-semibold">
                        {formatInt(product.price, true)}
                      </span>{" "}
                      <span>night</span>
                    </p>
                    <p className="text-[rgb(34,34,34)] capitalize">
                      {product.category}
                    </p>
                  </div>
                </div>
              ))}
              {/* End Cards */}
            </div>
          </div>
        </section>
      </PagesLayout>
    </div>
  );
}
