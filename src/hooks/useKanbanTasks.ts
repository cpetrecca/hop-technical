import { useReducer, useState } from "react";
import { KanbanStates } from "../config/kanbanboard-config";

type Task = {
  text: string;
  state: KanbanStates;
};

enum TaskActionKind {
  CREATE,
  MOVE,
}

interface TaskAction {
  type: TaskActionKind;
  payload?: {text:string, state:KanbanStates};
}

const initialState: Task[] = [];

function tasksReducer(tasks:Task[], action: TaskAction) {
  const { type, payload } = action;  
  switch (type) {
    case TaskActionKind.CREATE:
      return [...tasks, {text:payload!.text, state:payload!.state }];
    case TaskActionKind.MOVE:
      return [];
    default:
     return tasks;
  }
}

const useKanbanTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);
  const [error, setError] = useState("");

  const resetError=()=>{
    setError("");
  }

  const createTask=(text:string, state:KanbanStates)=>{
    dispatch({type:TaskActionKind.CREATE, payload:{text:text, state:state}});
  }

  return {error:{error}, tasks, resetError, createTask}
};

export default useKanbanTasks;
