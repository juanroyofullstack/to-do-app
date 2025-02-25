import React from 'react';

import { useDragAndDrop } from '../hooks/useDragAndDrop';

import { ColumnNames, COLUMNS } from './../utils/index';
import { CreateTask } from './CreateTask';
import { Task } from './Task';

import './TaskColumn.scss';

export interface TaskColumnProps {
	data: ITasks[];
	identifier: string;
	isDragging: boolean;
	handleDragging: (dragging: boolean) => void;
}

export const TaskContainer = ({
	data,
	identifier,
	handleDragging,
}: TaskColumnProps): JSX.Element => {
	const { title } = COLUMNS[identifier as ColumnNames];
	const { handleUpdateList } = useDragAndDrop();

	const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		const task = JSON.parse(e.dataTransfer.getData('task'));
		handleUpdateList(task, identifier);
		handleDragging(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
		e.preventDefault();

	return (
		<div
			className={`Column Column-${title} text-lg font-semibold p-2`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			data-testid="Column"
		>
			<h2>{title}</h2>
			<div className="Column-box bg-slate-200 shadow-lg rounded-md p-2 flex flex-col gap-2">
				{data.map((task, i) => {
					return <Task key={i} task={task} handleDragging={handleDragging} />;
				})}
				<CreateTask column={identifier} />
			</div>
		</div>
	);
};
