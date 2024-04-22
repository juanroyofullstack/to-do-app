import React from 'react';
import { useSelector } from 'react-redux';

import { TaskContainer } from '../components/TaskColumn';
import { TaskEditorModal } from '../components/TaskEditorModal';
import  { useDragAndDrop } from '../hooks/useDragAndDrop';
import type { RootState } from '../store/index';
import { useAppContext } from '../utils/getContext';

import './BoardContainer.scss';

export const BoardContainer = (): JSX.Element => {
    const { name, projectname } = useSelector((state: RootState) => state.project);
    const selectData: DataStateInitial = useSelector((state: RootState) => state.data);
    const { handleDragging, isDragging } = useDragAndDrop();
    const [appState ] = useAppContext();

    const { modifyState } = appState;

    return (
        <div className='BoardContainer flex'>
            {modifyState && <TaskEditorModal />}
            <div className="p-2">
                <h1 className="text-4xl font-medium">Welcome {name}</h1>
                <h2 className="text-2xl font-medium">{projectname}</h2>
            </div>
            <div className='BoardContainer-container flex'>
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