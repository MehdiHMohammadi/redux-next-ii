"use client";
import { useState } from "react";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { state } from "../../redux/store";
import {
  toggleGluten,
  addTopping,
  addCounterRedux,
} from "../../redux/pizzaSlice";

function Page() {
  const [counter, setCounter] = useState(0);
  const decementHandler = () => setCounter(counter + 1);

  const toppings = useSelector((state) => state.pizza.toppings);
  const isGluten = useSelector((state) => state.pizza.gluten);
  const counterRedux = useSelector((state) => state.pizza.counteer);
  console.log({ toppings, isGluten, counterRedux });
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center items-center gap-2 flex-col">
      <h1>{counterRedux}</h1>
      <button
        onClick={decementHandler}
        className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
      >
        +
      </button>
      {/* ------------------------------ */}
      <div className="flex flex-col">
        {toppings.map((topping, index) => (
          <div key={index}>{topping}</div>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
          onClick={() => dispatch(addTopping("sausage"))}
        >
          Add Sausage
        </button>
        <button
          className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
          onClick={() => dispatch(toggleGluten())}
        >
          Toggle Gluten
        </button>
        <button
          className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
          onClick={() => dispatch(addCounterRedux(counterRedux + 2))}
        >
          add Counteer
        </button>
      </div>
      {/* ------------------------------ */}
      <h1>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h1>
    </div>
  );
}

export default Page;
