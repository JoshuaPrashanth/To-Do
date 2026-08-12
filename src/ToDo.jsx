import { useState } from "react";
import AddTask from "./AddTask";
import Refresh from "./Refresh";

function ToDo() {
  const [searchTask, setSearchTask] = useState("");

  const [showAddTask, setShowAddTask] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [originalTasks, setOriginalTasks] = useState();

  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Read a book", completed: false },
    { id: 4, title: "Go for a walk", completed: false },
    { id: 5, title: "Practice coding", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  function markTask(id) {
    if (!tasks[id - 1].completed) {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { id: task.id, title: task.title, completed: true };
          } else {
            return task;
          }
        }),
      );
    }
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  }
  const completed_count = tasks.filter((task) => {
    return task.completed === true;
  });

  const pending_count = tasks.filter((task) => {
    return task.completed === false;
  });

  function search() {
    const filteredTasks = tasks.filter((task) => {
      if (
        task.title.toLocaleLowerCase().includes(searchTask.toLowerCase().trim())
      ) {
        return task;
      }
    });
    setOriginalTasks([...tasks]);
    setTasks(filteredTasks);
    setSearchTask("");
    setRefresh(true);
  }

  const displayedTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "pending") {
      return !task.completed;
    } else {
      return task;
    }
  });

  return (
    <div className="main-container">
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Search for task..."
        value={searchTask}
        onChange={(e) => {
          setSearchTask(e.target.value);
        }}
      />

      <button className="search-button" onClick={() => search()}>
        Search
      </button>
      {refresh && (
        <Refresh
          setRefresh={setRefresh}
          setTasks={setTasks}
          original={originalTasks}
        />
      )}
      <br />
      <br />

      <button
        className="add-task-button"
        onClick={() => {
          setShowAddTask(true);
        }}
      >
        Add Task
      </button>
      {showAddTask && (
        <AddTask
          setShowAddTask={setShowAddTask}
          setTasks={setTasks}
          originalTasks={tasks}
        />
      )}
      <label htmlFor="sort">
        Filter
        <select
          name="sort"
          id="sort"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {" "}
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </label>

      <p className="total-count">Total: {tasks.length}</p>
      <p className="pending-count">Pending: {pending_count.length}</p>
      <p className="completed-count">Completed: {completed_count.length}</p>
      <main>
        {displayedTasks.map((task) => {
          return (
            <div className="task-container" key={task.id}>
              <p className="task-name">
                <b>{task.title}</b>
              </p>
              <button className="mark-button" onClick={() => markTask(task.id)}>
                {task.completed ? "Marked" : "Mark"}
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ToDo;
