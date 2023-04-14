import { useReducer, useState } from "react";
import { Task } from "../config/kanbanboard-config";

const DUMMY_DATA = [
  { text: "Ir al espacio", state: 0 },
  { text: "Ir al sotano", state: 0 },
  { text: "Ir al baño", state: 1 },
  { text: "Ir a marte", state: 2 },
];

enum TaskActionKind {
  CREATE,
  MOVE,
}

interface TaskAction {
  type: TaskActionKind;
  payload?: Task;
}

const initialState: Task[] = [...DUMMY_DATA];

function tasksReducer(tasks: Task[], action: TaskAction) {
  const { type, payload } = action;
  switch (type) {
    case TaskActionKind.CREATE:
      return [...tasks, { text: payload!.text, state: payload!.state }];
    case TaskActionKind.MOVE:
      return [];
    default:
      return tasks;
  }
}

const useKanbanTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);
  const [error, setError] = useState("");

  const resetError = () => {
    setError("");
  };

  const repeatedTask = (task: Task) => {
    let isRepeated = false;
    tasks.forEach((loadedTask) => {
      if (loadedTask.text === task.text) {
        isRepeated = true;
      }
    });
    return isRepeated;
  };

  const createTask = (task: Task) => {
    if (repeatedTask(task)) {
      setError((prev) => "Esta tarea ya ha sido cargada");
    } else {
      dispatch({ type: TaskActionKind.CREATE, payload: task });
    }
  };
  return { error, tasks, resetError, createTask };
};

export default useKanbanTasks;
