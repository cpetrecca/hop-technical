type Props ={
    text:string;
}

const Task:React.FC<Props> = ({text}) => {
    return <div className="m-1 bg-slate-400  ">{text}</div>
};

export default Task;
