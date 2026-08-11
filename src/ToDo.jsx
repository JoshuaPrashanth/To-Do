import { useState } from "react";
import AddTask from "./AddTask";
import Refresh from "./Refresh";

function ToDo() {
  const [searchTask, setSearchTask] = useState("");

  const [showAddTask, setShowAddTask] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [originalTasks, setOriginalTasks] = useState();

  const [tasks, setTasks] = useState([]);

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
      // setMarkCount((prev) => prev + 1);
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

      <p className="total-count">Total: {tasks.length}</p>
      <p className="pending-count">Pending: {pending_count.length}</p>
      <p className="completed-count">Completed: {completed_count.length}</p>
      <main>
        {tasks.map((task, index) => {
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
