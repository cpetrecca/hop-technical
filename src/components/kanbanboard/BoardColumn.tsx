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
  const bgStyles = isDragging ? "bg-gray-800" : "bg-hop3";
  const columnStyles = `${bgStyles} ${width} mx-1 h-200 rounded-md overflow-hidden border`;
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
      <main className="min-h-[300px]">
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
