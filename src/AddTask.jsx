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
      <h5>Add Task</h5>

      <input
        type="text"
        placeholder="Enter Task...."
        value={taskname}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button className="submit-button" onClick={() => submitTask()}>
        submit
      </button>
    </div>
  );
}
export default AddTask;
