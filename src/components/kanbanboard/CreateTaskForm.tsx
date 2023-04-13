import {
  kanbanBoardConfig,
  KanbanStates,
} from "../../config/kanbanboard-config";
import { useState } from "react";

const CreateTaskForm = () => {
  const [task, setTask] = useState("");
  const [taskState, setTaskState] = useState(KanbanStates.TODO);

  const onAdd = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const onCancel = (e: any) => {
    e.preventDefault();
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
      <input
        onClick={onAdd}
        className="bg-green-800 rounded-full p-2 text-sm border hover:bg-green-700 active:border-black"
        type="submit"
        value="Añadir Tarea"
      ></input>
      <button
        onClick={onCancel}
        className="bg-red-800 rounded-full p-2 text-sm border hover:bg-red-700 active:border-black"
      >
        Cancelar
      </button>
    </form>
  );
};

export default CreateTaskForm;
