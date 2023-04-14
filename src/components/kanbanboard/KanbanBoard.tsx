import { useState } from "react";
import ReactDOM from "react-dom";
import { kanbanBoardConfig } from "../../config/kanbanboard-config";
import BoardColumn from "./BoardColumn";
import CreateTaskForm from "./CreateTaskForm";
import useKanbanTasks from "../../hooks/useKanbanTasks";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { Task } from "../../config/kanbanboard-config";

const domElement = document.getElementById("modal");

const KanbanBoard = () => {
  const { tasks, createTask, error, resetError } = useKanbanTasks();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const showModalToggleHandler = () => {
    setShowCreateModal((prev) => !prev);
  };

  const columnsWidth = `w-1/${kanbanBoardConfig.columns.length}`;
  
  return (
    <>
      {showCreateModal && domElement &&  ReactDOM.createPortal(
        <Modal>
          <CreateTaskForm
            onCancel={showModalToggleHandler}
            onSubmit={createTask}
            error={error}
            resetError={resetError}
          ></CreateTaskForm>
        </Modal>, domElement
      )}
      <center>
        <div className="w-5/6 bg-hop2 my-3 py-2 rounded-lg border-black ">
          <header className="font-semibold flex flex-row  justify-between px-10 my-2">
            <p>Tablero Kanban</p>
            <Button
              callBack={showModalToggleHandler}
              styled="green"
              value="+ Añadir"
            ></Button>
          </header>
          <main className="flex flex-row">
            {kanbanBoardConfig.columns.map((column, index) => {
              let tasksFilteredByColumn: Task[] = [];
              tasks.forEach((task) => {
                if (task.state === column.id) tasksFilteredByColumn.push(task);
              });
              return (
                <BoardColumn
                  tasks={tasksFilteredByColumn}
                  key={index}
                  title={column.title}
                  width={columnsWidth}
                ></BoardColumn>
              );
            })}
          </main>
        </div>
      </center>
    </>
  );
};

export default KanbanBoard;
