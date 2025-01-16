import React from 'react'

import { useModifyContext } from '../utils/getContext'

interface TaskInterface {
	task: ITasks
	handleDragging: (dragging: boolean) => void
}

export const Task = ({ task, handleDragging }: TaskInterface): JSX.Element => {
	const [, setAppState] = useModifyContext()
	const { title, body } = task

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('task', JSON.stringify(task))
		handleDragging(true)
	}

	const handleDragEnd = () => handleDragging(false)

	return (
		<div
			className="Task bg-slate-50 p-2 rounded-md"
			draggable
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onClick={() => {
				setAppState({ modifyState: true, taskData: task })
			}}
		>
			<h3 className="font-normal text-lg">{title}</h3>
			<p className="font-normal text-base">{body}</p>
		</div>
	)
}
