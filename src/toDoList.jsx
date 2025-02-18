import React, { useState } from 'react';
import './ToDoList.css';

export default function ToDoList({ tasks, setTasks }) {
    const predefinedTasks = [
        "Throw back the covers",
        "Open up the blinds and windows",
        "Freshen up",
        "Make and serve breakfast",
        "Clean up breakfast",
        "Complete a 10-minute exercise regime",
        "Shower, do hair and makeup, get dressed",
        "Gather a basket for tidying",
        "Straighten up the living and dining room",
        "Make the beds",
        "Tidy the bedroom"
    ];

    const [newTask, setNewTask] = useState('');
    const [selectedTask, setSelectedTask] = useState('');
    const [editTaskIndex, setEditTaskIndex] = useState(-1);
    const [editTaskText, setEditTaskText] = useState('');

    const addTask = () => {
        if (selectedTask.trim() !== '') {
            if (tasks.some(task => task.text === selectedTask)) {
                alert('Task already exists in the list');
            } else {
                setTasks([...tasks, { text: selectedTask, completed: false }]);
                setSelectedTask('');
            }
        }
    };

    const createNewTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleSelectChange = (e) => {
        setSelectedTask(e.target.value);
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) => {
            if (taskIndex === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const startEditingTask = (index) => {
        setEditTaskIndex(index);
        setEditTaskText(tasks[index].text);
    };

    const saveEditedTask = () => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === editTaskIndex) {
                return { ...task, text: editTaskText };
            }
            return task;
        });
        setTasks(updatedTasks);
        setEditTaskIndex(-1);
        setEditTaskText('');
    };

    const cancelEdit = () => {
        setEditTaskIndex(-1);
        setEditTaskText('');
    };

    return (
        <div className="todoContainer">
            <h3>What a beautiful day! Let's make it even better by battling the chaos. Time to turn that mess into success!</h3>
            <div className="inputContainer">
                <div>
                    <select value={selectedTask} onChange={handleSelectChange}>
                        <option value="" disabled>Select a task</option>
                        {predefinedTasks.map((task, index) => (
                            <option key={index} value={task}>{task}</option>
                        ))}
                    </select>
                    <button onClick={addTask}>Add Task</button>
                </div>
                <div>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Create a new task"
                    />
                    <button onClick={createNewTask}>Create Task</button>
                </div>
            </div>
            <ul className="taskList">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        {editTaskIndex === index ? (
                            <div className="taskWrapper">
                                <input
                                    type="text"
                                    value={editTaskText}
                                    onChange={(e) => setEditTaskText(e.target.value)}
                                />
                                <div className="taskWrapper1">
                                    <button className="saveButton" onClick={saveEditedTask}>Save</button>
                                    <button className="cancelButton" onClick={cancelEdit}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div className="taskWrapper">
                                <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                                <div className="taskWrapper1">
                                    <button className="editButton" onClick={() => startEditingTask(index)}>Edit</button>
                                    <button className="removeButton" onClick={() => removeTask(index)}>Remove</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
