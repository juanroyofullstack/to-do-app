import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editTask, removeTask } from '../store/actionCreators'
import { useModifyContext } from '../utils/getContext'

import { Button } from './Button'

import './TaskEditorModal.scss'

export const TaskEditorModal = (): JSX.Element => {
	const [appState, setAppState] = useModifyContext()
	const { taskData: taskDataContext } = appState
	const [taskData, setTaskData] = useState<ITasks>(taskDataContext)

	const dispatch = useDispatch()

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target
		setTaskData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleModifyTask = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		dispatch(editTask(taskData))
		setAppState({ modifyState: false, taskData: undefined })
	}
	const handleDeleteTask = (): void => {
		dispatch(removeTask(taskDataContext))
		setAppState({ modifyState: false, taskData: undefined })
	}

	return (
		<div className="TaskEditorModal flex absolute items-center justify-center w-full h-full">
			<form
				onSubmit={handleModifyTask}
				className="flex justify-center flex-col rounded-md z-10 gap-4 border-gray-200 bg-white p-20 w-6/12"
			>
				<input
					defaultValue={taskData.title}
					name="title"
					onChange={handleChange}
					className="rounded-md w-full shadow-md p-2"
				></input>
				<textarea
					defaultValue={taskData.body}
					name="body"
					onChange={handleChange}
					className="rounded-md w-full min-h-8 shadow-md p-2"
				></textarea>
				<div className="flex justify-center gap-4">
					<Button
						title={'Save'}
						className="button bg-slate-200 rounded-md shadow-md p-2"
						type="submit"
					/>
					<Button
						title={'Delete'}
						className="button bg-slate-200 rounded-md shadow-md p-2"
						onClick={() => handleDeleteTask()}
					/>
					<Button
						title={'Cancel'}
						className="button bg-slate-200 rounded-md shadow-md p-2"
						onClick={() =>
							setAppState({ modifyState: false, taskData: undefined })
						}
					/>
				</div>
			</form>
			<div className="absolute bg-gray-500 opacity-50 z-0 h-screen w-full"></div>
		</div>
	)
}
