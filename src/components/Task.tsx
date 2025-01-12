import React from 'react';

import { useModifyContext } from '../utils/getContext';

interface TaskInterface {
    task: ITasks;
    handleDragging: (dragging: boolean) => void;
}

export const Task = ({ task, handleDragging }: TaskInterface): JSX.Element => {
    const [, setAppState] = useModifyContext();
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
            <h3 className='font-normal text-lg'>{title}</h3>
            <p className='font-normal text-base'>{body}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm text-sm p-1 mt-2 rounded' onClick={()=> {setAppState({modifyState: true, taskData: task});}}>
                Modify
            </button>
        </div>
    );
};