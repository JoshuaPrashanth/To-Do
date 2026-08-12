import { useState } from "react";
import AddTask from "./AddTask";
import { Check, Search, Trash } from "lucide-react";

function ToDo() {
  const [searchTask, setSearchTask] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const initialTasks = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Read a book", completed: false },
    { id: 4, title: "Go for a walk", completed: false },
    { id: 5, title: "Practice coding", completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  function markTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const completed_count = tasks.filter((task) => task.completed);
  const pending_count = tasks.filter((task) => !task.completed);

  function search() {
    setSearchTask(searchTask.trim());
    setRefresh(true);
  }

  function handleSearchChange(e) {
    setSearchTask(e.target.value);
    setRefresh(false);
  }

  const displayedTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTask.toLowerCase().trim());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="main-container">
      <h1>To-Do List</h1>

      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for task..."
          value={searchTask}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
        />

        <Search className="search-icon" onClick={() => search()} />
      </div>

      <button
        className="add-task-button"
        onClick={() => {
          setShowAddTask(true);
        }}
      >
        Add Task
      </button>

      {showAddTask && (
        <AddTask setShowAddTask={setShowAddTask} setTasks={setTasks} />
      )}

      <div className="filter-container">
        <button
          id="all"
          className={`filter-buttons ${filter === "all" ? "active" : ""}`}
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>

        <button
          id="completed"
          className={`filter-buttons ${filter === "completed" ? "active" : ""}`}
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>

        <button
          id="pending"
          className={`filter-buttons ${filter === "pending" ? "active" : ""}`}
          onClick={() => {
            setFilter("pending");
          }}
        >
          Pending
        </button>
      </div>

      <main>
        {displayedTasks.map((task) => {
          return (
            <div className="task-container" key={task.id}>
              <p className="task-name">
                <b>{task.title}</b>
              </p>

              <div className="action-buttons">
                <Check
                  className={`check-icon ${task.completed ? "active" : ""}`}
                  onClick={() => markTask(task.id)}
                />

                <Trash
                  className="trash-icon"
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </div>
          );
        })}
      </main>

      <div className="status-container">
        <p className="total-count status-box">
          Total Tasks: <br /> {tasks.length}
        </p>

        <p className="pending-count status-box">
          {pending_count.length} <br />
          Pending
        </p>

        <p className="completed-count status-box">
          {completed_count.length} <br />
          Completed
        </p>
      </div>
    </div>
  );
}

export default ToDo;
