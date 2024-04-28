import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addProject } from '../store/actionCreators';

import './InscriptionForm.scss';

interface WelcomeFormInterface {
    name: string;
    projectName: string;
}
interface FormErrorInterface {
    name?: string;
    projectName?: string;
    isValid: boolean;
}

export const InscriptionForm = (): JSX.Element => {
    const [formData, setFormData] = useState<WelcomeFormInterface>({
        name: '',
        projectName: ''
    });
    const [errors, setErrors] = useState<FormErrorInterface>({
        name: '',
        projectName: '',
        isValid: false
    });

    const dispatch = useDispatch();

    const validateForm = () => {
        let isValid = true;
        const newErrors: FormErrorInterface = {
            name: '',
            projectName: '',
            isValid: false
        };

        if (!formData.name) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.projectName) {
            newErrors.projectName = "Project Name is required";
            isValid = false;
        }

        setErrors({...newErrors, isValid});
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    };

    const submitForm = (e: React.SyntheticEvent): CreateAction | void => {
        e.preventDefault();
        if(validateForm()) {
            return dispatch(addProject({...formData, created: true}));
        }
        return undefined;
    };

    return (
        <div className="InscriptionForm">
            <form onSubmit={submitForm}>
                <h1>Hi! enter your name and project name to start</h1>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" onChange={handleChange}/>

                {errors.name &&
                <div className="error">{errors.name}</div>}

                <label htmlFor="projectName">Project Name</label>
                <input id="projectName" name="projectName"  onChange={handleChange}/>

                {errors.projectName &&
                <div className="error">{errors.projectName}</div>}

                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};