import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {

    const newTask = tasks.map(task => {
      if (taskId === task.id) {
        return{...task, isCompleted: !task.isCompleted}
      }

      return task
    })
    setTasks(newTask);
  }

  function onTaskDelete(taskId) {

    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);

  }

  function onTaskAddSubmit(title, description) {

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className=" w-125 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas </h1>
        <AddTask onTaskAddSubmit={onTaskAddSubmit}/>
        <Tasks tasks={tasks} 
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
        />
      </div> 
    </div>
  );
}

export default App;