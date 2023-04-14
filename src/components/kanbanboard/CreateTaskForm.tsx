import { useState, useEffect } from "react";
import {
  kanbanBoardConfig,
  KanbanStates,
} from "../../config/kanbanboard-config";
import Button from "../ui/Button";

type Props = {
  onSubmit: Function;
  error: string;
  resetError: Function;
};

const INITIAL_STATE = KanbanStates.TODO;

const CreateTaskForm: React.FC<Props> = ({ onSubmit, error, resetError }) => {
  const [taskText, setTaskText] = useState("");
  const [taskState, setTaskState] = useState(INITIAL_STATE);
  const [taskFormError, setTaskFormError] = useState("");

  useEffect(() => {
    setTaskFormError(error);
  }, [error]);

  const onAddHandler = () => {
    if (taskText == "") {
      setTaskFormError("No puede cargar una tarea sin texto.");
    } else {
      onSubmit({ text: taskText, state: taskState });
      if (taskFormError !== "") {
        resetForm();
      }
    }
  };

  const onCancelHandler = () => {
    resetForm();
  };

  const resetForm = () => {
    setTaskText("");
    setTaskState(INITIAL_STATE);
    setTaskFormError("");
    resetError();
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
      {taskFormError !== "" && <p className="text-red-600">{taskFormError}</p>}
    </form>
  );
};

export default CreateTaskForm;
