import React, { useRef } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function Todo() {
  const dispitch = useDispatch();
  const inp = useRef();

  const handleEnter = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random() * 1000,
      text: inp.current.value,
      isComoplate: false,
    };

    dispitch(addTodo(newTodo));
    inp.current.value = "";
  };

  return (
    <div className="container flex flex-col md:items-center">
      <div>
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-5">Todo List</h2>
      </div>
      <div className=" mt-[25px] flex flex-col md:flex-row ">
        <form onSubmit={handleEnter} className=" max-w-full">
          <input
            ref={inp}
            type="text"
            className="w-full rounded-md px-6  py-3 bg-blue-50 text-lg font-semibold"
            placeholder="type something"
          />
        </form>
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
