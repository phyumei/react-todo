import React from "react";

const Task = ({ task: { id, task, isDone }, removeTask }) => {
  const handleDeleteTaskBtn = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      removeTask(task);
    }
  };

  return (
    <div className="border-2 flex justify-between items-center border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <p>{task}</p>
      <button
        onClick={handleDeleteTaskBtn}
        className="bg-red-300 border-2 border-red-300 text-red-700 rounded-lg py-2 px-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
