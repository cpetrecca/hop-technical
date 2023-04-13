import Task from "./Task";

type Props ={
    title:string;
    width:string;
}

const BoardColumn:React.FC<Props> = ({title, width}) => {
    const columnStyles=`bg-hop3 ${width} mx-1 h-200 rounded-md overflow-hidden border`
    return(
        <div className={columnStyles}>
            <header className="bg-slate-600 ">{title}</header>
            <main className="min-h-[300px]">
                <Task text="dffsdf"/> 
                <Task text="cxvgsdfgd sfhgsdrhwsu thjjwikorf tjweofjweikjpol ifwejpoifdsfsd"/>
                <Task text="dffsdf"/>
            </main>
            
        </div>
    )
};

export default BoardColumn;
