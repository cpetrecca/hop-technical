import { useState } from "react";
import {
  kanbanBoardConfig,
  KanbanStates,
} from "../../config/kanbanboard-config";
import Button from "../ui/Button";

type Props = {
  onSubmit: Function;
};

const INITIAL_STATE = KanbanStates.TODO;

const CreateTaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [taskText, setTaskText] = useState("");
  const [taskState, setTaskState] = useState(INITIAL_STATE);

  const onAddHandler = () => {
    onSubmit({ text: taskText, state: taskState });
    resetForm();
  };

  const onCancelHandler = () => {
    resetForm();
  };

  const resetForm = () => {
    setTaskText("");
    setTaskState(INITIAL_STATE);
  };

  return (
    <form className="w-[50%] bg-slate-300 flex flex-col p-5 gap-2">
      <label htmlFor="taskText">Añadir Tarea:</label>
      <input
        type="text"
        id="taskText"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required
      ></input>
      <select value={taskState} onChange={(e) => setTaskState(+e.target.value)}>
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
      <Button callBack={onCancelHandler} style="red" value="Cancelar"></Button>
    </form>
  );
};

export default CreateTaskForm;
