import { useState } from "react";

function AddTask({ setShowAddTask, setTasks }) {
  const [taskname, setTaskName] = useState("");

  function submitTask() {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        { id: prevTasks.length + 1, title: taskname.trim(), completed: false },
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
