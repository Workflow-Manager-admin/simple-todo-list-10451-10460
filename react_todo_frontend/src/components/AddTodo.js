import React, { useState } from "react";

// PUBLIC_INTERFACE
const AddTodo = ({ onAdd }) => {
  /**
   * Renders a form with fields for "Title", "Detail", and an "ADD" button.
   * All fields use design system classes.
   */
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    onAdd({ title: title.trim(), detail: detail.trim() });
    setTitle("");
    setDetail("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="add-todo-field-group">
        <label className="typo-6" htmlFor="todo-title">Title</label>
        <input
          className="add-todo-title typo-9"
          id="todo-title"
          type="text"
          value={title}
          maxLength={40}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter your todo title"
          required
        />
      </div>
      <div className="add-todo-field-group">
        <label className="typo-6" htmlFor="todo-detail">Detail</label>
        <input
          className="add-todo-detail typo-10"
          id="todo-detail"
          type="text"
          value={detail}
          maxLength={120}
          onChange={e => setDetail(e.target.value)}
          placeholder="Todo details (optional)"
        />
      </div>
      <button className="add-todo-btn typo-12 bg-style-23 rounded-15" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
