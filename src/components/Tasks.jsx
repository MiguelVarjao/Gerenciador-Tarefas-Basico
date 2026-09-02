import { ChevronsRightIcon, Trash2Icon } from "lucide-react";

function Tasks(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task) => (
            <li key={task.id} className="flex gap-1.5">
                <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}>
                    {task.title}
                </button>

                <button className="bg-slate-400 text-white p-2 rounded-md">
                    <ChevronsRightIcon />
                </button>

                <button onClick={() => props.onTaskDelete(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <Trash2Icon />
                </button>

            </li>))}
        </ul>
    );
}

export default Tasks;