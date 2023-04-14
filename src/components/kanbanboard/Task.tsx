
type Props = {
  text: string;
  onDragging:any;
};

const Task: React.FC<Props> = ({ text, onDragging }) => {

  return (
    <div
        onDragStart={onDragging}
        onDragEnd={onDragging}
      draggable
      className="m-1 bg-slate-400 cursor-pointer hover:bg-slate-300  active:bg-slate-500 "
    >
      {text}
    </div>
  );
};

export default Task;
