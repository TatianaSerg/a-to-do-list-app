import React from "react";
import ToDoList from "./toDoList";
import { useOutletContext } from "react-router-dom";
import fiterImg from "./assets/retro.webp";

function HomePage() {
    const [tasks, setTasks] = useOutletContext();

    return (
        <div>
            <ToDoList tasks={tasks} setTasks={setTasks} />
            <div className="taskPage">
                <img src={fiterImg} alt="housewife" />
            </div>
        </div>
    );
}

export default HomePage;




