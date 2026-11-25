import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
function TasksPage() {
  const { tasks, addTask, completeTask, deleteTask } = useTasks();

  return (
    <div className="p-6">
      <h2>My Tasks </h2>

      <TaskForm onAddTask={addTask} />

      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
}
export default TasksPage;
