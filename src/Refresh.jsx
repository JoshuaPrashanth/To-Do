function Refresh({ setRefresh, setTasks, original }) {
  function refreshTasks() {
    console.log(original);
    setRefresh(false);
  }
  return (
    <button className="add-task-button" onClick={() => refreshTasks()}>
      Refresh
    </button>
  );
}
export default Refresh;
