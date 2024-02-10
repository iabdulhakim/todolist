import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const Todos = useSelector((ombor) => ombor.todos);

  return (
    <div className=" flex flex-col  gap-2 md:ml-[50px] md:mt-0 mt-[15px] ">
      {Todos.map((todo, i) => (
        <span
          className="flex gap-2 text-black relative items-center text-lg bg-blue-50 rounded-md py-2 px-4 font-semibold max-w-[400px] md:w-[400px]"
          key={todo.id}
        >
          <span className="flex items-center"> 
            <p className="text-red-500 mr-2">{i + 1}</p>
            <p className="font-normal">{todo.text}</p>
          </span>
          <div className="absolute right-3 top-3 flex gap-1">
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className=""
            >
              <img src="./delete.svg" height={20} width={20} alt="" />
            </button>
          </div>
        </span>
      ))}
    </div>
  );
}

export default TodoList;
