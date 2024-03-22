import './InscriptionForm.scss';

import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addProject } from '../store/actionCreators';

interface WelcomeFormInterface {
    name: string;
    projectname: string;
}
interface FormErrorInterface {
    name?: string;
    projectname?: string;
    isValid: boolean;
}

export const InscriptionForm: React.FC = (): JSX.Element => {
    const [formData, setFormData] = useState<WelcomeFormInterface>({
        name: '',
        projectname: ''
    });
    const [errors, setErrors] = useState<FormErrorInterface>({
        name: '',
        projectname: '',
        isValid: false,
    });
    
    const dispatch = useDispatch();

    const validateForm = () => {
        let isValid = true;
        const newErrors: FormErrorInterface = {
            name: '',
            projectname: '',
            isValid: false
        };
    
        if (!formData.name) {
            newErrors.name = "Name is required";
            isValid = false;
        }
    
        if (!formData.projectname) {
            newErrors.projectname = "Project Name is required";
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
                <input id="name" name="name"  onChange={handleChange}/>
                {errors.name && <div className="error">{errors.name}</div>}
                <label htmlFor="projectname">Project Name</label>
                <input id="projectname" name="projectname"  onChange={handleChange}/>
                {errors.projectname && <div className="error">{errors.projectname}</div>}
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};