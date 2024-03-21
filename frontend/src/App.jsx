import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todo/");
      setTodos(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-indigo-100 min-h-screen p-4">
      <nav className="pt-8">
        <h1 className="text-5xl text-center"> ToDo List</h1>
      </nav>
      <TodoForm />
      <Table todos={todos} setTodos={setTodos} isLoading={isLoading} />
    </div>
  );
}

export default App;
