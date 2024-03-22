import axios from "axios";
import { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineDeleteOutline,
} from "react-icons/md";
/* eslint-disable react/prop-types */
const Table = ({ todos, setTodos, isLoading, fetchData }) => {
  const [editText, setEditText] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setEditText((prev) => ({
      ...prev,
      body: e.target.value,
    }));
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/todo/${id}/`,
        value
      );
      const newTodo = todos.map((todo) =>
        todo.id === id ? response.data : todo
      );
      setTodos(newTodo);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, {
      completed: !value,
    });
  };

  return isLoading ? (
    <div className="flex justify-center m-32">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="py-32 flex justify-center">
      <table className="w-11/12 max-w-4xl">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              To Do
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Date Created
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem, index) => {
            return (
              <tr key={index}>
                <td className="p-3 text-sm ">
                  <span
                    className="cursor-pointer inline-block"
                    onClick={() => {
                      handleCheckbox(todoItem.id, todoItem.completed);
                    }}
                  >
                    {todoItem.completed ? (
                      <MdOutlineCheckBox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </span>
                </td>
                <td className="p-3 text-sm ">{todoItem.body}</td>
                <td className="p-3 text-sm">
                  <span
                    className={`p-1.5 text-xs text-center font-medium tracking-wider rounded-md ${
                      todoItem.completed ? "bg-green-300" : "bg-red-300"
                    }`}
                  >
                    {todoItem.completed ? "Done" : "In Progress"}
                  </span>
                </td>
                <td className="p-3 text-sm ">{todoItem.created}</td>
                <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
                  <span className=" cursor-pointer text-xl">
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <MdEditNote onClick={() => setEditText(todoItem)} />
                    </button>
                  </span>
                  <span className=" cursor-pointer text-xl">
                    <MdOutlineDeleteOutline
                      onClick={() => handleDelete(todoItem.id)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">EDIT</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Add Todo"
              className="input mr-4 flex-1"
              onChange={handleChange}
              value={editText.body}
            />
            <button
              className="btn btn-primary"
              onClick={() => handleEdit(editText.id, editText)}
            >
              Edit To Do
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Table;
