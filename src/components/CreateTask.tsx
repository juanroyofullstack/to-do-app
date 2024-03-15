import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from '../store/actionCreators';

interface CreateTaskInterface {
    title: string;
    body: string;
}

export const CreateTask = ({ column }: {column: string}): JSX.Element => {
    const [didTheUserClicked, setDidTheUserClicked] = useState<boolean>(false);
    const [formData, setFormData] = useState<CreateTaskInterface>({
        title: '',
        body: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData((prevData: CreateTaskInterface) => ({...prevData, [name]: value}));
    };

    const submitForm = (e: React.SyntheticEvent): TaskAction => {
        e.preventDefault();
        setDidTheUserClicked(!didTheUserClicked);
        return dispatch(addTask({...formData, column: column}));
    };
    return (
        <>
            {didTheUserClicked ? 
                <form onSubmit={submitForm} className="CreateTask">
                    <input name="title" placeholder="Your task title" onChange={handleChange}/>
                    <input name="body" placeholder="Write your task description here" onChange={handleChange} />
                    <button type="submit">Create Task</button>
                </form>
                :
                <div className='AddButton' onClick={() => setDidTheUserClicked(!didTheUserClicked)}>
                click here to add a task
                </div>
            }
        </>
    );
};