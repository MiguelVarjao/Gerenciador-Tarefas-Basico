import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({tasks, onTaskClick, onTaskDelete}) {
    const navigate = useNavigate();

    function verDetalhes(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tasks.map((task) => (
            <li key={task.id} className="flex gap-1.5">
                <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 flex items-center gap-2 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}>
                    {task.isCompleted && <CheckIcon />}
                    {task.title}
                </button>

                <button onClick={() => verDetalhes(task)} className="bg-slate-400 text-white p-2 rounded-md">
                    <ChevronRightIcon />
                </button>

                <button onClick={() => onTaskDelete(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <Trash2Icon />
                </button>

            </li>))}
        </ul>
    );
}

export default Tasks;