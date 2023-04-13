import { kanbanBoardConfig } from "../../config/kanbanboard-config";
import BoardColumn from "./BoardColumn";

const KanbanBoard = () => {
  const columnsWidth = `w-1/${kanbanBoardConfig.columns.length}`;
  return (
    <center>
      <div className="w-5/6 bg-hop2 my-3 py-2 rounded-lg">
        <header className="">Tablero Kanban</header>
        <main className="flex flex-row">
          {kanbanBoardConfig.columns.map((el, index) => {
            return (
              <BoardColumn
                key={index}
                title={el.title}
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
