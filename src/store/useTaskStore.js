import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, task: "Buy groceries", isDone: false },
    { id: 2, task: "Complete project report", isDone: false },
    { id: 3, task: "Call plumber for repair", isDone: false },
    { id: 4, task: "Attend team meeting", isDone: true },
    { id: 5, task: "Pay electricity bill", isDone: false },
  ],

  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  doneTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    })),
}));

export default useTaskStore;
