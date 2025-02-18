import React from "react";
import { useOutletContext } from "react-router-dom";
import './TaskPages.css';
import pendingPageImg from "./assets/pendingPageImg.jpg";

function PendingPage() {
    const [tasks] = useOutletContext();
    const pendingTasks = tasks.filter(task => !task.completed);

    return (
        <div className="taskPage">
            <h1>Pending Tasks</h1>
            {pendingTasks.length > 0 ? (
                <>
                    <p>Here are your pending tasks.</p>
                    <p>But before you dive in, take a break and relax at your leisure.</p>
                    <ul>
                        {pendingTasks.map((task, index) => (
                            <li key={index}>{task.text}</li>
                        ))}
                    </ul>
                    <div>
                        <img src={pendingPageImg} alt="housewife" />
                    </div>
                </>
            ) : (
                <p>No pending tasks yet.</p>
            )}
        </div>
    );
}

export default PendingPage;





