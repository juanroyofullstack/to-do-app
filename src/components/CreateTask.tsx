import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../store/actionCreators'

import { Button } from './Button'

interface CreateTaskInterface {
	title: string
	body: string
}

export const CreateTask = ({ column }: { column: string }): JSX.Element => {
	const [didTheUserClicked, setDidTheUserClicked] = useState<boolean>(false)
	const [formData, setFormData] = useState<CreateTaskInterface>({
		title: '',
		body: '',
	})

	const dispatch = useDispatch()

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target
		setFormData((prevData: CreateTaskInterface) => ({
			...prevData,
			[name]: value,
		}))
	}

	const submitForm = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		setDidTheUserClicked(!didTheUserClicked)
		dispatch(addTask({ ...formData, column: column }))
	}

	return (
		<>
			{didTheUserClicked ? (
				<form
					onSubmit={submitForm}
					className="CreateTask flex flex-col pt-2 gap-2"
				>
					<input
						className="rounded p-1"
						name="title"
						placeholder="Your task title"
						onChange={handleChange}
					/>
					<textarea
						className="rounded p-1"
						name="body"
						placeholder="Write your task description here"
						onChange={handleChange}
					/>
					<div className="CreateTaskButtons flex gap-2 pt-2">
						<Button
							title={'Create'}
							className="hover:shadow-md hover:bg-gray-300 p-1 rounded"
							type="submit"
						/>
						<Button
							title={'Cancel'}
							className="hover:shadow-md hover:bg-gray-300 p-1 rounded"
							type="button"
							onClick={() => setDidTheUserClicked(prevValue => !prevValue)}
						/>
					</div>
				</form>
			) : (
				<button
					className="AddButton hover:bg-gray-300 hover:shadow-md text-black text-sm py-2 px-2 mt-4 rounded w-full flex justify-center"
					onClick={() => setDidTheUserClicked(!didTheUserClicked)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
			)}
		</>
	)
}
