import React from 'react';
import { useSelector } from 'react-redux';

import { TaskContainer } from '../components/TaskColumn';
import { TaskEditorModal } from '../components/TaskEditorModal';
import  { useDragAndDrop } from '../hooks/useDragAndDrop';
import type { RootState } from '../store/index';
import { useAppContext } from '../utils/getContext';

import './BoardContainer.scss';

export const BoardContainer: React.FC = (): JSX.Element => {
    const { name, projectname } = useSelector((state: RootState) => state.project);
    const selectData: DataStateInitial = useSelector((state: RootState) => state.data);
    const { handleDragging, isDragging } = useDragAndDrop();
    const [appState, ] = useAppContext();

    const { modifyState } = appState;
    return (
        <div className={'BoardContainer'}>
            {modifyState && <TaskEditorModal />}
            <h1>Welcome {name}</h1>
            <h2>{projectname}</h2>
            <div className='BoardContainer-container'>
                {Object.entries(selectData).map(([identifier, value]: [string, ITasks[]], i: number) => (
                    <TaskContainer 
                        key={i} 
                        identifier={identifier}
                        data={value} handleDragging={handleDragging} 
                        isDragging={isDragging}
                    />))}
            </div>
        </div>
    );
};