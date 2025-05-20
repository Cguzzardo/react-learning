import { useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(event) {
    setinputValue(event.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, inputValue]);
    setinputValue("");
  }
  function handleDelete(indextodelete){
    const updatedTodo = todos.filter((_, index)=> index !== indextodelete)  
    setTodos(updatedTodo)
  }

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} 
              <button onClick={handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
