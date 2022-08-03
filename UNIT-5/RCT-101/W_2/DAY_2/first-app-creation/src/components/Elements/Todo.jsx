import { useState } from "react";

const Todo = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  let obj = {
    title: text,
    id: Date.now(),
    status: false,
  };
  return (
    <div>
      <input value={text} onChange={handleText} type="text" />
      <button onClick={() => handleSubmit(obj)}>Add</button>
    </div>
  );
};
export default Todo;
