import { useState } from "react";

function Todo({ handleTodo }) {
  const [text, setText] = useState("");
  function handleText(e) {
    setText(e.target.value);
  }
  function data() {
    let dt = {
      id: Date.now(),
      text: text,
    };
    fetch("http://localhost:5500/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dt),
    });

    getData();
  }
  async function getData() {
    try {
      let dt = await fetch("http://localhost:5500/todos").then((res) =>
        res.json()
      );
      handleTodo(dt);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <input value={text} onChange={(e) => handleText(e)} type="text" />
      <button onClick={data}>Add</button>
      <button onClick={getData}>Get Data</button>
    </>
  );
}
export default Todo;
