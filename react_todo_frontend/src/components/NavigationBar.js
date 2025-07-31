import React from "react";

// PUBLIC_INTERFACE
const NavigationBar = ({ filter, onChangeFilter }) => {
  /**
   * Shows bottom navigation for All/Completed, can expand for more.
   * @param {string} filter - Current filter ("all", "completed")
   * @param {function} onChangeFilter - Handler for changing filter
   */

  return (
    <nav className="todo-navbar bg-style-2">
      <button
        className={`todo-navbar-btn typo-6 ${filter === "all" ? "selected" : ""}`}
        onClick={() => onChangeFilter("all")}
        aria-pressed={filter === "all"}
      >
        All
      </button>
      <button
        className={`todo-navbar-btn typo-6 ${filter === "completed" ? "selected" : ""}`}
        onClick={() => onChangeFilter("completed")}
        aria-pressed={filter === "completed"}
      >
        Completed
      </button>
    </nav>
  );
};

export default NavigationBar;
