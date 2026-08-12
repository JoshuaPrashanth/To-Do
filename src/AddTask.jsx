import { useState } from "react";

function AddTask({ setShowAddTask, setTasks }) {
  const [taskname, setTaskName] = useState("");

  function submitTask() {
    const trimmedTask = taskname.trim();

    if (!trimmedTask) {
      return;
    }

    setTasks((prevTasks) => {
      const newId =
        prevTasks.length > 0
          ? Math.max(...prevTasks.map((task) => task.id)) + 1
          : 1;

      return [
        ...prevTasks,
        {
          id: newId,
          title: trimmedTask,
          completed: false,
        },
      ];
    });

    setTaskName("");
    setShowAddTask(false);
  }

  return (
    <div className="add-task-container">
      <h3>Add Task</h3>

      <input
        className="input-task"
        type="text"
        placeholder="Enter Task...."
        value={taskname}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitTask();
          }
        }}
      />

      <button
        className="add-task-button submit-button"
        onClick={() => submitTask()}
      >
        submit
      </button>
    </div>
  );
}

export default AddTask;
