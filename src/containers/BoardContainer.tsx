import React from 'react';
import { useSelector } from 'react-redux';

import { TaskColumn } from '../components/TaskColumn';
import  { useDragAndDrop } from '../hooks/useDragAndDrop';
import type { RootState } from '../store/index';
import './BoardContainer.scss';

export const BoardContainer: React.FC = (): JSX.Element => {
    const { name, projectname } = useSelector((state: RootState) => state.project);
    const selectData: DataStateInitial = useSelector((state: RootState) => state.data);
    const { handleDragging, isDragging } = useDragAndDrop();

    return (
        <div className={'BoardContainer'}>
            <h1>Welcome {name}</h1>
            <h2>{projectname}</h2>
            <div className='BoardContainer-container'>
                {Object.entries(selectData).map(([identifier, value]: [string, ITasks[]], i: number) => (
                    <TaskColumn 
                        key={i} 
                        identifier={identifier}
                        data={value} handleDragging={handleDragging} 
                        isDragging={isDragging}
                    />))}
            </div>
        </div>
    );
};