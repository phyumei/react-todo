import React from "react";
import useTaskStore from "../store/useTaskStore";

const Task = ({ task: { id, task, isDone } }) => {
  // const { removeTask, doneTask } = useContext(TaskContext);

  const { removeTask, doneTask } = useTaskStore();

  const handleDeleteTaskBtn = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };

  return (
    <div className="border-2 flex justify-between items-center border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          onChange={handleOnChange}
          className="size-4 "
          checked={isDone}
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
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
