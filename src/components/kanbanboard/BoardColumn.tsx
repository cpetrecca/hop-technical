import TaskBox from "./Task";
import { Task } from "../../config/kanbanboard-config";

type Props = {
  title: string;
  width: string;
  tasks: any;
};

const BoardColumn: React.FC<Props> = ({ title, width, tasks = [] }) => {
  const columnStyles = `bg-hop3 ${width} mx-1 h-200 rounded-md overflow-hidden border`;
  return (
    <div className={columnStyles}>
      <header className="bg-slate-600 ">{title}</header>
      <main className="min-h-[300px]">
        {tasks.map((task: Task) => {
          return <TaskBox key={task.text} text={task.text} />;
        })}
      </main>
    </div>
  );
};

export default BoardColumn;
