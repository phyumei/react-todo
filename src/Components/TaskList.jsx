import React from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <div>
      <h3 className="font-bold font-serif mb-5 text-3xl">
        Task List(Total {tasks.length}, Completed{" "}
        {tasks.filter((task) => task.isDone).length})
      </h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
