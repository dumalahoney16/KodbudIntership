import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim()) {
      editTodo(todo.id, text);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;