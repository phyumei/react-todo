import React, { useState } from "react";
import Heading from "./Components/Heading";
import CreateTask from "./Components/CreateTask";
import TaskList from "./Components/TaskList";

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Buy groceries", isDone: false },
    { id: 2, task: "Complete project report", isDone: false },
    { id: 3, task: "Call plumber for repair", isDone: false },
    { id: 4, task: "Attend team meeting", isDone: true },
    { id: 5, task: "Pay electricity bill", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const removeTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList
        taskList={taskList}
        removeTask={removeTask}
        doneTask={doneTask}
      />
    </div>
  );
};

export default App;
