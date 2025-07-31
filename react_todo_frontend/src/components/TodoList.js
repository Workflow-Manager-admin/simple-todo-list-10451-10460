import React from "react";
import TodoItem from "./TodoItem";

// PUBLIC_INTERFACE
const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onEdit,
  filter
}) => {
  /** 
   * Displays a (filtered) list of todos, each with controls to complete, edit, or delete.
   * @param {Array} todos - Array of todo objects.
   * @param {Function} onComplete - Handler for marking todo as completed.
   * @param {Function} onDelete - Handler to delete a todo.
   * @param {Function} onEdit - Handler to edit a todo.
   * @param {String} filter - View filter: "all", "completed".
   */
  const filteredTodos = filter === "completed"
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 && <div className="todo-empty typo-11">No todos yet.</div>}
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
