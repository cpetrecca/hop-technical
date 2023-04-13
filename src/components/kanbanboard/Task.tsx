
type Props ={
    text:string;
}

const Task:React.FC<Props> = ({text}) => {

    return <div className="m-1 bg-slate-400 cursor-pointer hover:bg-slate-300  active:bg-slate-500 ">{text}</div>
};

export default Task;
