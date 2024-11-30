import React from "react";
import Heading from "./Components/Heading";
import CreateTask from "./Components/CreateTask";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <div className="p-10">
      <Heading />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
