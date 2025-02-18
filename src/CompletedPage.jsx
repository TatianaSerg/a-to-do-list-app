import React from "react";
import goodJobImg from "./assets/good_job.jpeg";
import { useOutletContext } from "react-router-dom";
import './TaskPages.css';

function CompletedPage() {
    const [tasks] = useOutletContext();
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="taskPage">
            <h1>Completed Tasks</h1>
            {completedTasks.length > 0 ? (
                <>
                    <p>Way to GO! Here are your completed tasks.</p>
                    <ul>
                        {completedTasks.map((task, index) => (
                            <li key={index}>{task.text}</li>
                        ))}
                    </ul>
                    <div>
                        <img src={goodJobImg} alt="good job" />
                    </div>
                </>
            ) : (
                <p>No completed tasks yet.</p>
            )}
        </div>
    );
}

export default CompletedPage;





