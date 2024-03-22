import React from 'react';
import { useAppContext } from '../utils/getContext';

interface TaskInterface {
    task: ITasks;
    handleDragging: (dragging: boolean) => void;
}

export const Task = ({ task, handleDragging }: TaskInterface): JSX.Element => {
    const [, setAppState] = useAppContext();
    const { title, body } = task;

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
        handleDragging(true);
    };

    const handleDragEnd = () => handleDragging(false);

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <>
                <span>{title}</span>
                <p>{body}</p>
            </>

            <button onClick={()=> {setAppState({modifyState: true, taskData: task});}}>modify</button>
        </div>
    );
};