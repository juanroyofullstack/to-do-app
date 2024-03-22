import { useState } from "react";
import { useDispatch } from 'react-redux';

import { addTask, removeTask } from '../store/actionCreators';

export const useDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);
    const dispatch = useDispatch();

    const handleUpdateList = (task: ITasks, column: string): void => {
        dispatch(removeTask(task));
        dispatch(addTask({...task, column}));
    };

    const handleDragging = (dragging: boolean) => setIsDragging(dragging);

    return {
        isDragging,
        handleUpdateList,
        handleDragging
    };
};