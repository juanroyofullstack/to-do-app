import React from 'react';
import { useDispatch } from "react-redux";
import { removeTask } from '../store/actionCreators';

export const TaskComponent = ({ task }: {task: ITasks}) => { 
    const { title, body } = task;
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        return dispatch(removeTask(task));
    };

    return (
        <div>
            <span>{title}</span>
            <p>{body}</p>
            <button onClick={handleDeleteTask}>delete</button>
        </div>
    );
};