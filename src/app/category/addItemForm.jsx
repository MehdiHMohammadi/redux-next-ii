import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

function AddItemForm({ onAddItem }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    onAddItem(data);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <section className="text-gray-200 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              Form Add Itemes
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap  -m-2">
              <div className="p-2 w-1/2">
                <div className="flex flex-wrap-reverse flex-col ">
                  <label
                    htmlFor="plan"
                    className="leading-7 text-sm text-gray-200"
                  >
                    plan
                  </label>
                  <input
                    {...register("plan", { required: true })}
                    type="text"
                    id="plan"
                    name="plan"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.plan && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="flex flex-wrap-reverse items-end flex-col">
                  <label
                    htmlFor="speed"
                    className="leading-7 text-sm text-gray-200"
                  >
                    speed
                  </label>
                  <input
                    {...register("speed", { required: true })}
                    type="text"
                    id="speed"
                    name="speed"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.speed && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="flex flex-wrap-reverse flex-col">
                  <label
                    htmlFor="storage"
                    className="leading-7 text-sm text-gray-200"
                  >
                    storage
                  </label>
                  <input
                    {...register("storage", { required: true })}
                    type="text"
                    id="storage"
                    name="storage"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.storage && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="flex flex-wrap-reverse flex-col">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-200"
                  >
                    price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    id="price"
                    name="price"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Add Item
                </button>
              </div>
              <div className="p-2 w-full pt-4 mt-4 border-t border-gray-200 text-center">
                <Link href={"/"} className="text-indigo-500  my-4 ">
                  example@email.com
                </Link>

                <span className="flex justify-center my-4 ">
                  <Link href={"/"} className="text-gray-100">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href={"/"} className="ml-4 text-gray-100">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link>
                  <Link href={"/"} className="ml-4 text-gray-100">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                  <Link href={"/"} className="ml-4 text-gray-100">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default AddItemForm;
