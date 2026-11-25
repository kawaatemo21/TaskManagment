import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks((previousTasks) => [...previousTasks, newTask]);
  }
  function completeTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  }
  function deleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
  };
}

export default useTasks;
