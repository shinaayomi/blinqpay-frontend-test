import PagesLayout from "@/components/PagesLayout";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItems,
  selectTotal,
} from "@/slices/cartSlice";
import formatInt from "@/utils/formatInt";
import { useDispatch } from "react-redux";

export default function CheckoutLayout() {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const addItemIntoCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const removeItemFromCart = (id: any) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <PagesLayout>
      <section className="py-3 px-3 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-3/4 bg-gray-100 rounded-lg p-4">
              <h2 className="text-3xl font-semibold">
                {items.length == 0
                  ? "Your Shopping Basket is Empty"
                  : "Shopping Basket"}{" "}
              </h2>
              <hr className="my-2" />
              <div className="grid gap-8 mt-6">
                {/* start card */}
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-3">
                    <Image
                      src={item.image}
                      alt="Package"
                      width={300}
                      height={200}
                      className="w-[300px] h-[300px] border border-slate-600 rounded-lg"
                      priority
                    />
                    <div className="flex flex-col gap-3">
                      <h5 className="font-semibold text-lg">{item.title}</h5>
                      <AiFillStar className="text-amber-500" />
                      <p className="text-xs">{item.description}</p>
                      <p className="font-medium">
                        {formatInt(item.price, true)}
                      </p>
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => removeItemFromCart(item.id)}
                          className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
                        >
                          Remove
                        </button>
                        {/* <p className="text-xl font-bold">{item.length}</p> */}
                        <button
                          onClick={() => addItemIntoCart(item)}
                          className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* end card */}
              </div>
            </div>
            <div className="w-full md:w-1/4 bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between">
                <p className="text-lg font-medium">Total amount:</p>
                <p className="text-xl font-bold">{formatInt(total, true)}</p>
              </div>
              <div className="flex justify-between mt-3 mb-12">
                <p className="text-lg font-medium">Items:</p>
                <p className="text-xl font-bold">{items.length} Items</p>
              </div>
              <button className="w-full bg-blue-600 text-white text-sm font-medium rounded-lg py-2 mt-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
}
