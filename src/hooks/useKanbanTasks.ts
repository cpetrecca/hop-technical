import { useReducer, useState } from "react";
import { KanbanStates, Task } from "../config/kanbanboard-config";


const DUMMY_DATA=[
    {text:"Ir al espacio", state:0}, {text:"Ir al sotano", state:0}, {text:"Ir al baño", state:1}, {text:"Ir a marte", state:2}
  ]


enum TaskActionKind {
  CREATE,
  MOVE,
}

interface TaskAction {
  type: TaskActionKind;
  payload?: Task;
}

const initialState: Task[] = [...DUMMY_DATA];

function tasksReducer(tasks:Task[], action: TaskAction) {
  const { type, payload } = action;  
  switch (type) {
    case TaskActionKind.CREATE:
        console.log(payload);
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

  const createTask=(task:Task)=>{
    dispatch({type:TaskActionKind.CREATE, payload:task});
  }
  return {error:{error}, tasks, resetError, createTask}
};

export default useKanbanTasks;
