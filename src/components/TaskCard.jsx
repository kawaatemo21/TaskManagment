function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-[rgb(255,255,255)] p-4 rounded-xl shadow-sm">
      <div>
        <h3 className="font-semibold text-[rgb(59,48,42)]">{task.title}</h3>

        <p className="text-sm text-[rgb(100,100,100)]">
          {task.completed ? "Completed" : "In progress"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onComplete(task.id)}
          className="bg-[rgb(34,197,94)] text-[rgb(255,255,255)] px-3 py-2 rounded-lg"
        >
          Complete
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-[rgb(239,68,68)] text-[rgb(255,255,255)] px-3 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
