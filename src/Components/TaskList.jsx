import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, removeTask }) => {
  return (
    <div>
      <h3 className="font-bold font-serif mb-5 text-3xl">
        Task List(Total {taskList.length}, Completed {0})
      </h3>
      {taskList.map((task) => (
        <Task key={task} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
