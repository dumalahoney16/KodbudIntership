import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTodo, toggleComplete }) {
  const [filter, setFilter] = useState("All");

  const filteredTodos = todos.filter(todo => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true; // All
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
            toggleComplete={toggleComplete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;