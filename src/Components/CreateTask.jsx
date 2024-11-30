import React, { useState } from "react";
import useTaskStore from "../store/useTaskStore";

const CreateTask = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTaskStore();

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTaskBtn = (event) => {
    const newTask = {
      id: crypto.randomUUID(),
      task: task,
      isDone: false,
    };

    addTask(newTask);
    setTask("");
  };

  return (
    <div className="flex mb-5">
      <input
        type="text"
        className="flex-grow border-2 border-slate-300 rounded-l-lg p-2"
        value={task}
        onChange={handleOnChange}
        placeholder="Enter Task"
      />
      <button
        onClick={handleAddTaskBtn}
        className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-4"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
