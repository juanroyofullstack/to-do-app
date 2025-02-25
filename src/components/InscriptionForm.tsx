import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProject } from '../store/actionCreators';

import { validateForm } from './../utils/index';
import { Button } from './Button';

import './InscriptionForm.scss';

export interface WelcomeFormInterface {
	name: string;
	projectName: string;
}

export interface FormErrorInterface {
	name?: string;
	projectName?: string;
	isValid?: boolean;
}

export const InscriptionForm = (): JSX.Element => {
	const [formData, setFormData] = useState<WelcomeFormInterface>({
		name: '',
		projectName: '',
	});
	const [errors, setErrors] = useState<FormErrorInterface>({
		name: '',
		projectName: '',
		isValid: false,
	});

	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const submitForm = (e: React.SyntheticEvent): CreateAction | void => {
		e.preventDefault();
		const validateErrors = validateForm(formData);
		if (Object.keys(validateErrors).length === 0) {
			return dispatch(addProject({ ...formData, created: true }));
		}
		return setErrors(validateErrors);
	};

	return (
		<div className="InscriptionForm" data-testid="InscriptionForm">
			<form onSubmit={submitForm}>
				<h1 className="text-3xl text-center">
					Hi! enter your name and project name to start
				</h1>
				<label htmlFor="name">Name</label>
				<input
					className="w-full"
					id="name"
					name="name"
					aria-label="name-input"
					onChange={handleChange}
				/>

				{errors.name && (
					<span className="error" data-testid="errorName">
						{errors.name}
					</span>
				)}

				<label htmlFor="projectName">Project Name</label>
				<input
					className="w-full"
					id="projectName"
					name="projectName"
					aria-label="project-input"
					onChange={handleChange}
				/>

				{errors.projectName && (
					<span className="error" data-testid="errorProjectName">
						{errors.projectName}
					</span>
				)}

				<Button
					title={'Create Project'}
					className="bg-slate-200 w-fit"
					type="submit"
				/>
			</form>
		</div>
	);
};
