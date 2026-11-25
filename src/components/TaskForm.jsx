import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (title.trim() === "") return;

        onAddTask(title);
        setTitle("");
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter new Task ........"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;
