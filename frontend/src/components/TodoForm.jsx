const TodoForm = () => {
  return (
    <div className=" w-1/4 flex mx-auto my-10 flex-col">
      <input type="text" placeholder="Add Todo" className="input mb-4" />
      <button className="btn btn-primary"> Create To Do</button>
    </div>
  );
};

export default TodoForm;
