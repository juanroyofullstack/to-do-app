import React from 'react';
import { COLUMNS, ColumnNames } from './../utils/index';
import  { useDragAndDrop } from '../hooks/useDragAndDrop';
import { Task } from './Task';
import  { CreateTask } from './CreateTask';
import './TaskColumn.scss';

interface TaskColumnProps {
    data: ITasks[];
    identifier: string;
    isDragging: boolean;
    handleDragging: (dragging: boolean) => void;
}

export const TaskContainer = ({ data, identifier, handleDragging }: TaskColumnProps): JSX.Element => {
    const { title } = COLUMNS[identifier as ColumnNames];
    const { handleUpdateList } = useDragAndDrop();

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const task = JSON.parse(e.dataTransfer.getData('task'));
        handleUpdateList(task, identifier);
        handleDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

    return (
        <div className={`Column Column-${title}`} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h2>{title}</h2>
            <div className={'Column-box'}>
                {data.map((task, i) => {
                    return (<Task key={i} task={task} handleDragging={handleDragging} />);
                })}
                <CreateTask column={identifier} />
            </div>
        </div>);
};