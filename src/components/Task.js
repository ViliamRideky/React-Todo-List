import React from 'react';
import './Task.css';

function Task({ taskName, description, deadline, completed, onTaskComplete, onTaskDelete }) {
    return (
        <div className='task' style={{ border: `4px solid ${completed ? 'lime' : 'white'}` }}>
            <h2>Task Name: {taskName}</h2>
            <p>Task Description: {description}</p>
            <p>Task Deadline: {deadline}</p>
            <button className='complete' onClick={onTaskComplete}>Complete</button>
            <button className='delete' onClick={onTaskDelete}>Delete</button>
        </div>
    );
}

export default Task;