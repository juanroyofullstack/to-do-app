import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editTask, removeTask } from '../store/actionCreators';

interface TaskComponent { 
    task: ITasks; 
    handleDragging: (dragging: boolean) => void;
}

export const TaskComponent = ({ task, handleDragging }: TaskComponent) => { 
    const [taskData, setTaskData] = useState<ITasks>(task);
    const [modifyState, setModifyState] = useState<boolean>(false);
    const { title, body } = taskData;
    
    const dispatch = useDispatch();

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
        handleDragging(true);
    };

    const handleDragEnd = () => handleDragging(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setTaskData(prevData => ({...prevData, [name]: value}));
    };

    const handleModifyTask = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setModifyState(!modifyState);
        dispatch(editTask(taskData));
    };

    const handleDeleteTask = (): void => {
        dispatch(removeTask(task));
    };

    return (
        <div 
            draggable 
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            {modifyState ?
                <>
                    <form onSubmit={handleModifyTask}>
                        <input defaultValue={title} name="title" onChange={handleChange}></input>
                        <input defaultValue={body} name="body" onChange={handleChange}></input>
                        <button type="submit">save</button>
                        <button onClick={handleDeleteTask}>delete</button>
                        <button onClick={()=> {setModifyState(!modifyState);}}>cancel</button>
                    </form>
                </>
                :             
                <>
                    <span>{title}</span>
                    <p>{body}</p>
                </>
            }
            <button onClick={()=> {setModifyState(true);}}>modify</button>
        </div>
    );
};