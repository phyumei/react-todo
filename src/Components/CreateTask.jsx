import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleOnChange = (event) => {
    setTask(event.target.value);
  };
  const handleAddTaskBtn = (event) => {
    addTask(task);
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