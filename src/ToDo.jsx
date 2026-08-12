import { useState } from "react";
import AddTask from "./AddTask";
import Refresh from "./Refresh";
import { Check, Search, Trash } from "lucide-react";

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

      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for task..."
          value={searchTask}
          onChange={(e) => {
            setSearchTask(e.target.value);
          }}
        />
        <Search className="search-icon" onClick={() => search()} />
      </div>

      {refresh && (
        <Refresh
          setRefresh={setRefresh}
          setTasks={setTasks}
          original={originalTasks}
        />
      )}

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
          {completed_count.length} <br /> Completed
        </p>
      </div>
    </div>
  );
}

export default ToDo;
