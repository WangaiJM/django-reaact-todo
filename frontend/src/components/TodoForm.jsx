import { useState } from "react";
import axios from "axios";
/* eslint-disable react/prop-types */
const TodoForm = ({ fetchData }) => {
  const [newTodo, setNewTodo] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      body: e.target.value,
    }));
  };

  const postTodo = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/todo/", newTodo);
      // setTodos((prevTodos) => [...prevTodos, newTodo]); -> doesn't include time aspect
      fetchData(); //includes the time
      setNewTodo({ body: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-1/4 flex mx-auto my-10 flex-col">
      <input
        type="text"
        placeholder="Add Todo"
        className="input mb-4"
        onChange={handleChange}
        value={newTodo.body}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            postTodo();
          }
        }}
      />
      <button className="btn btn-primary" onClick={postTodo}>
        Create To Do
      </button>
    </div>
  );
};

export default TodoForm;
