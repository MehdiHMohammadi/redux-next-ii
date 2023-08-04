"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  categoryGetAll,
  categoryGetById,
  addcategoryAddStorge,
  categoryRemove,
  categoryUpdate,
} from "./../../redux/reducers/categorySlice";

function Page() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.items);
  console.log("category = " + category[0].id);
  const categooryAll = () => dispatch(categoryGetAll());
  console.log("categooryAll =  " + categooryAll());
  // console.log("category after categoryAll = " + category[0].id);

  return (
    <div className="h-screen flex justify-center items-center gap-2 flex-col">
      <div className="flex flex-col"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-gray-400 rounded-tl rounded-bl">
                    Plan
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-gray-400">
                    Speed
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-gray-400">
                    Storage
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-gray-400">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-black text-sm bg-gray-400 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {category.map((cat, index) => (
                  <tr key={index}>
                    <td className="border-t-2 border-gray-300 px-4 py-3">
                      {cat.plan}
                    </td>
                    <td className="border-t-2 border-gray-300 px-4 py-3">
                      {cat.speed}
                    </td>
                    <td className="border-t-2 border-gray-300 px-4 py-3">
                      {cat.storage}
                    </td>
                    <td className="border-t-2 border-gray-300 px-4 py-3 text-lg text-gray-300">
                      {cat.price}
                    </td>
                    <td className="border-t-2 border-gray-300 w-10 text-center">
                      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              ALL Delete
            </button>
          </div>
        </div>
      </section>
      <h2>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h2>
    </div>
  );
}

export default Page;
