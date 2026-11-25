function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.title}
          <p>{task.completed ? "Completed" : "In progress"}</p>
          <button onClick={() => onComplete(task.id)}>Complete</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
