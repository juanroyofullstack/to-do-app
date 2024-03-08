import './InscriptionForm.scss';

import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addProject } from '../store/actionCreators';

interface WelcomeFormInterface {
    name: string;
    projectname: string;
}

export const InscriptionForm: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<WelcomeFormInterface>({
        name: '',
        projectname: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    };

    const submitForm = (e: React.SyntheticEvent): CreateAction => {
        e.preventDefault();
        return dispatch(addProject({...formData, created: true}));
    };

    return (
        <div className="InscriptionForm">
            <form onSubmit={submitForm}>
                <h1>Hi! enter your name and project name to start</h1>
                <h2>Name</h2>
                <input name="name"  onChange={handleChange}/>
                <h2>Project Name</h2>
                <input name="projectname"  onChange={handleChange}/>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};