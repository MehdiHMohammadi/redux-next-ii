"use client";
import { useState, useContext } from "react";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { state } from "../../redux/store";
import {
  toggleGluten,
  addTopping,
  addCounterRedux,
} from "../../redux/reducers/pizzaSlice";

import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "../../context/ThemeContext";

function Page() {
  const [themeValueState, setThemeValueState] = useState();
  const themeValue = (themeValue) => {
    setThemeValueState(themeValue);
  };
  // const { theme } = useTheme();
  const theme = themeValueState;

  const [counteer, setCounteer] = useState(0);
  const decementHandler = () => setCounteer(counteer + 1);

  const toppings = useSelector((state) => state.pizza.toppings);
  const isGluten = useSelector((state) => state.pizza.gluten);
  const counterRedux = useSelector((state) => state.pizza.counteer);
  console.log({ toppings, isGluten, counterRedux });
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.pizza.toppings);

  if (loadingStatus === "loading") {
    return (
      <div className="todo-list">
        loading ....
        <div className="loader" />
      </div>
    );
  }

  return (
    // <div className="h-screen flex justify-center items-center gap-2 flex-col">
    <div
      className={`${
        theme == "dark" ? "bg-black" : "bg-green-950 "
      } h-screen flex justify-center items-center gap-2 flex-col`}
    >
      {/* <themeContext.Provider value={theme}> */}
      <h1>{themeValueState}</h1>
      <h1>{theme}</h1>

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
          onClick={() => dispatch(addCounterRedux(counteer + 1))}
        >
          add Counteer
        </button>
        <button
          className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
          // onClick={handleSetTheme}
        >
          Theme
        </button>
        <ThemeToggle themProps={theme} themeValue={themeValue} />

        {/* <ThemeSwitch /> */}
      </div>
      {/* ------------------------------ */}
      <h1>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h1>
      {/* </themeContext.Provider> */}
    </div>
  );
}

export default Page;
