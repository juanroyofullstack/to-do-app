import React from 'react';
import { useSelector } from 'react-redux';

import { TaskContainer } from '../components/TaskColumn';
import { TaskEditorModal } from '../components/TaskEditorModal';
import  { useDragAndDrop } from '../hooks/useDragAndDrop';
import type { RootState } from '../store/index';
import { useModifyContext } from '../utils/getContext';

export const BoardContainer = (): JSX.Element => {
    const { name, projectName } = useSelector((state: RootState) => state.project);
    const selectData: DataStateInitial = useSelector((state: RootState) => state.data);
    const { handleDragging, isDragging } = useDragAndDrop();
    const [appState ] = useModifyContext();

    const { modifyState } = appState;

    return (
        <div className='BoardContainer flex flex-col'>
            {modifyState && <TaskEditorModal />}
            <div className="p-2">
                <h1 className="text-4xl font-medium">Welcome {name}</h1>
                <h2 className="text-2xl font-medium">{projectName}</h2>
            </div>
            <div className='BoardContainer-container w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
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