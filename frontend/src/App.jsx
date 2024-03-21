import "./App.css";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="bg-indigo-100 min-h-screen p-4">
      <nav className="pt-8">
        <h1 className="text-5xl text-center"> ToDo List</h1>
      </nav>
      <TodoForm />
      <Table />
    </div>
  );
}

export default App;
