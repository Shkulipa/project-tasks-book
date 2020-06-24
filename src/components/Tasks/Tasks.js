import React from 'react';
import './Tasks.sass';
import TasksItem from "./TaskItem/TasksItem";

const Tasks = ({tasks, onDelete, onToggleCompleted}) => {
    const elemetsPosts = tasks.map((element) => {
        return (
            <div>
                <TasksItem key={element.id}
                           elementText={element.text}
                           onDelete={() => onDelete(element.id)}
                           onToggleCompleted={() => onToggleCompleted(element.id)}
                           completed = { element.completed }/>
            </div>
        );
    });

    return (
        <div>
            {elemetsPosts}
        </div>
    );
}

export default Tasks;
