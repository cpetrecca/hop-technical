import TaskBox from "./Task";
import { Task } from "../../config/kanbanboard-config";

type Props = {
  title: string;
  width: string;
  tasks: Task[];
  columnId: number;
  onDragging: Function;
  isDragging: boolean;
  onDrop: any;
};

const BoardColumn: React.FC<Props> = ({
  title,
  width,
  tasks = [],
  columnId,
  onDragging,
  isDragging,
  onDrop,
}) => {
  //making classes for tailwind compilance
  const widthForTailwind = ["w-1/3", "w-1/4", "w-1/5", "w-1/6"];
  const bgStyles = isDragging ? "bg-gray-800" : "bg-hop3";
  const columnStyles = `${bgStyles} ${width}  min-h-[80%] rounded-md mx-2 overflow-hidden border`;
  return (
    <div
      className={columnStyles}
      id={"" + columnId}
      onDrop={onDrop}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <header className="bg-slate-600 ">{title}</header>
      <main className="min-h-[300px] ">
        {tasks.map((task: Task) => {
          return (
            <TaskBox onDragging={onDragging} key={task.text} text={task.text} />
          );
        })}
      </main>
    </div>
  );
};

export default BoardColumn;
