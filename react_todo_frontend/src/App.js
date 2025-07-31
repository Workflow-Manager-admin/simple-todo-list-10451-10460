import React, { useState, useEffect } from "react";
import "./App.css";
import "./todo-design-system.css";
import "./todo.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import NavigationBar from "./components/NavigationBar";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry of todo app, manages todo state and handles add/complete/delete.
   */
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  // Optional: for unique keys in starter demo (no backend yet)
  const [idSequence, setIdSequence] = useState(1);

  // Theme support
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");

  // PUBLIC_INTERFACE
  const handleAdd = ({ title, detail }) => {
    setTodos((tds) => [
      ...tds,
      {
        id: idSequence,
        title,
        detail,
        completed: false
      }
    ]);
    setIdSequence(idSequence + 1);
  };

  // PUBLIC_INTERFACE
  const handleComplete = (id) => {
    setTodos(tds =>
      tds.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // PUBLIC_INTERFACE
  const handleDelete = (id) => {
    setTodos(tds => tds.filter(todo => todo.id !== id));
  };

  // const handleEdit = (id, updates) => {...} // Placeholder

  return (
    <div className="App todo-app-root bg-style-1">
      <header className="app-header bg-style-2 shadow-0">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <div className="todo-appbar">
          <span className="typo-8">TODO APP</span>
        </div>
      </header>
      <main>
        <AddTodo onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onComplete={handleComplete}
          onDelete={handleDelete}
          // onEdit={handleEdit}
          filter={filter}
        />
      </main>
      <footer>
        <NavigationBar filter={filter} onChangeFilter={setFilter} />
      </footer>
    </div>
  );
}

export default App;
