import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, removeTask, doneTask }) => {
  return (
    <div>
      <h3 className="font-bold font-serif mb-5 text-3xl">
        Task List(Total {taskList.length}, Completed{" "}
        {taskList.filter((task) => task.isDone).length})
      </h3>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          doneTask={doneTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
