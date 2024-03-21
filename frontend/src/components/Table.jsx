import {
  MdCheckBoxOutlineBlank,
  MdEditNote,
  MdOutlineDeleteOutline,
} from "react-icons/md";
const Table = () => {
  return (
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
          <tr>
            <td className="p-3 text-sm ">
              <span className="cursor-pointer inline-block">
                <MdCheckBoxOutlineBlank />
              </span>
            </td>
            <td className="p-3 text-sm ">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-sm">
              <span className="p-1.5 text-xs text-center font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm ">22-04-24</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
              <span className=" cursor-pointer text-xl">
                <MdEditNote />
              </span>
              <span className=" cursor-pointer text-xl">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">
              <span className="cursor-pointer inline-block">
                <MdCheckBoxOutlineBlank />
              </span>
            </td>
            <td className="p-3 text-sm ">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-sm">
              <span className="p-1.5 text-xs text-center font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm ">22-04-24</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
              <span className=" cursor-pointer text-xl">
                <MdEditNote />
              </span>
              <span className=" cursor-pointer text-xl">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">
              <span className="cursor-pointer inline-block">
                <MdCheckBoxOutlineBlank />
              </span>
            </td>
            <td className="p-3 text-sm ">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-sm">
              <span className="p-1.5 text-xs text-center font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm ">22-04-24</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
              <span className=" cursor-pointer text-xl">
                <MdEditNote />
              </span>
              <span className=" cursor-pointer text-xl">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">
              <span className="cursor-pointer inline-block">
                <MdCheckBoxOutlineBlank />
              </span>
            </td>
            <td className="p-3 text-sm ">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-sm">
              <span className="p-1.5 text-xs text-center font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm ">22-04-24</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
              <span className=" cursor-pointer text-xl">
                <MdEditNote />
              </span>
              <span className=" cursor-pointer text-xl">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">
              <span className="cursor-pointer inline-block">
                <MdCheckBoxOutlineBlank />
              </span>
            </td>
            <td className="p-3 text-sm ">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-sm">
              <span className="p-1.5 text-xs text-center font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm ">22-04-24</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
              <span className=" cursor-pointer text-xl">
                <MdEditNote />
              </span>
              <span className=" cursor-pointer text-xl">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
