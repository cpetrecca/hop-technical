import { useState } from "react";
import { kanbanBoardConfig } from "../../config/kanbanboard-config";
import BoardColumn from "./BoardColumn";
import CreateTaskForm from "./CreateTaskForm";
import useKanbanTasks from "../../hooks/useKanbanTasks";

const KanbanBoard = () => {
  const { tasks, createTask } = useKanbanTasks();
  const [showCreateModal, setShowCreateModal]=useState(false)


  const columnsWidth = `w-1/${kanbanBoardConfig.columns.length}`;
  return (
    <center>
      <CreateTaskForm></CreateTaskForm>
      <div className="w-5/6 bg-hop2 my-3 py-2 rounded-lg ">
        <header className="font-semibold flex flex-row  justify-between px-10 my-2">
          <p>Tablero Kanban</p>
          <button className="bg-green-800 rounded-full p-2 text-sm border hover:bg-green-700 active:border-black">
            + Añadir
          </button>
        </header>
        <main className="flex flex-row">
          {kanbanBoardConfig.columns.map((column, index) => {
            return (
              <BoardColumn
                key={index}
                title={column.title}
                width={columnsWidth}
              ></BoardColumn>
            );
          })}
        </main>
      </div>
    </center>
  );
};

export default KanbanBoard;
