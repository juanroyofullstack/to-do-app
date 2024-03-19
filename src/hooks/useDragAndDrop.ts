import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/index';
import { editTask } from '../store/actionCreators';

export const useDragAndDrop = () => {

    const [isDragging, setIsDragging] = useState(false);
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();

    const handleUpdateList = (task: ITasks, column: string): void => { 
        dispatch(editTask({...task, column}));
    };
    
    const handleDragging = (dragging: boolean) => setIsDragging(dragging);

    return {
        isDragging,
        data,
        handleUpdateList,
        handleDragging,
    };
};