import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { editTask, removeTask } from '../store/actionCreators';
import { useModifyContext } from '../utils/getContext';

import './TaskEditorModal.scss';

export const TaskEditorModal = (): JSX.Element => {
    const [appState, setAppState] = useModifyContext();
    const { taskData: taskDataContext } = appState;
    const [taskData, setTaskData] = useState<ITasks>(taskDataContext);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setTaskData(prevData => ({...prevData, [name]: value}));
    };

    const handleModifyTask = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(editTask(taskData));
        setAppState({modifyState: false, taskData: undefined});
    };

    const handleDeleteTask = (): void => {
        dispatch(removeTask(taskDataContext));
    };

    const handleCancelEdit = () => {
        setAppState({modifyState: false, taskData: undefined});
    };

    return(
        <div className='TaskEditorModal flex absolute items-center justify-center w-full h-full'>
            <form onSubmit={handleModifyTask} className="flex justify-center flex-col rounded-md z-10 gap-4 border-gray-200 border-4 bg-white p-20 w-6/12">
                <input defaultValue={taskData.title} name="title" onChange={handleChange} className="border-4 rounded-md border-blue-200 w-full"></input>
                <textarea defaultValue={taskData.body} name="body" onChange={handleChange} className=" border-4 rounded-md border-blue-200 w-full min-h-8"></textarea>
                <div className='flex justify-center gap-4'>
                    <button type="submit" className='button border-gray-200 rounded-md border-4 p-2'>Save</button>
                    <button onClick={handleDeleteTask} className='button border-gray-200 rounded-md border-4 p-2'>Delete</button>
                    <button onClick={handleCancelEdit} className='border-gray-200 border-4'>Cancel</button>
                </div>
            </form>
            <div className="absolute bg-gray-500 opacity-50 z-0 h-screen w-full"></div>
        </div>
    );
};

