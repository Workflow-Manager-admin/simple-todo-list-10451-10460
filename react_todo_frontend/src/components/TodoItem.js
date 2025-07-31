import React from "react";

// PUBLIC_INTERFACE
const TodoItem = ({
  todo,
  onComplete,
  onDelete,
  onEdit
}) => {
  /**
   * Renders a single todo item with title, detail, and action icons.
   * Uses custom CSS classes for design system.
   */
  return (
    <div className={`todo-item shadow-0 rounded-15 bg-style-22 ${todo.completed ? "completed" : ""}`}>
      <div className="todo-item-main">
        <div className="todo-item-titles">
          <div className="todo-item-title typo-9">{todo.title}</div>
          {todo.detail ? (
            <div className="todo-item-detail typo-10">{todo.detail}</div>
          ) : null}
        </div>
        <div className="todo-item-actions">
          {/* Mark as completed */}
          <button
            onClick={() => onComplete(todo.id)}
            className="btn-action"
            title={todo.completed ? "Completed" : "Mark as complete"}
            aria-label="Complete"
          >
            {/* Icon: CheckCircle */}
            <span role="img" aria-label="check" className="icon-check">&#10003;</span>
          </button>
          {/* Edit - placeholder for now */}
          {/* <button onClick={() => onEdit(todo.id)} className="btn-action" aria-label="Edit">
            <span role="img" aria-label="edit" className="icon-pencil">&#9998;</span>
          </button> */}
          {/* Delete */}
          <button
            onClick={() => onDelete(todo.id)}
            className="btn-action"
            aria-label="Delete"
          >
            {/* Icon: Trash */}
            <span role="img" aria-label="trash" className="icon-trash">&#128465;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
