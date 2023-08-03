"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todosSlice";

function Page() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos);
  console.log(todo);
  const handleAddTodo = () => {
    dispatch(addTodo("New Job!!!"));
  };

  return (
    <div className="h-screen flex justify-center items-center gap-2 flex-col">
      <div className="flex flex-col">
        {todo.map((doo, index) => (
          <div key={index}>{doo}</div>
        ))}
      </div>

      <h1 className="text-green-950 ">{todo}</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <h2>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h2>
    </div>
  );
}

export default Page;
