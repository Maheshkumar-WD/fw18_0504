import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Elements/Todo";
import { useState } from "react";
function FetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(
    (res) => res.json()
  );
}
 
function App() {
  const [todo, setTodo] = useState([]);
  const [post, setPost] = useState([]);
  const handleSubmit = (obj) => {
    setTodo([...todo, obj]);
    console.log(todo);
  };
  const handleFetchData = async () => {
    try {
      const data = await FetchData();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
    let data = FetchData();
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Todo handleSubmit={handleSubmit} />
        <button onClick={handleFetchData}>Get Post</button>
        {post.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
