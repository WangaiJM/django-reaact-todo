import {
  MdCheckBoxOutlineBlank,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineDeleteOutline,
} from "react-icons/md";
/* eslint-disable react/prop-types */
const Table = ({ todos, setTodos, isLoading }) => {
  return isLoading ? (
    <div className="flex justify-center m-32">
      <p>Loading</p>
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
                  <span className="cursor-pointer inline-block">
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
                    <MdEditNote />
                  </span>
                  <span className=" cursor-pointer text-xl">
                    <MdOutlineDeleteOutline />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
