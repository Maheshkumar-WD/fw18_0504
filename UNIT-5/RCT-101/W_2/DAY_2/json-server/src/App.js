import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  function handleTodo(val) {
    setTodo(val);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Todo handleTodo={handleTodo} />
          {todo.map((todo) => (
            <h1 key={todo.id}>{todo.text}</h1>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
