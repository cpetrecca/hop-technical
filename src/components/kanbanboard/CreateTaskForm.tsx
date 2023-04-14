import { useState } from "react";
import {
  kanbanBoardConfig,
  KanbanStates,
} from "../../config/kanbanboard-config";
import Button from "../ui/Button";


const CreateTaskForm = () => {
  const [task, setTask] = useState("");
  const [taskState, setTaskState] = useState(KanbanStates.TODO);

  const onAddHandler = () => {

  };

  const onCancelHandler = () => {
    
  };

  return (
    <form className="w-[50%] bg-slate-300 flex flex-col p-5 gap-2">
      <label htmlFor="taskText">Añadir Tarea:</label>
      <input
        type="text"
        id="taskText"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      ></input>
      <select  onChange={(e) => setTaskState(+e.target.value)}>
        {kanbanBoardConfig.columns.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          );
        })}
      </select>
      <Button
        callBack={onAddHandler}
        style="green"
        value="Añadir Tarea"
      ></Button>
      <Button
        callBack={onCancelHandler}
        style="red"
        value="Cancelar"
      ></Button>
    </form>
  );
};

export default CreateTaskForm;
