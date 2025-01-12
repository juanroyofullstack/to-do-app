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

    return(
        <div className='TaskEditorModal flex absolute items-center justify-center w-full h-full'>
            <form onSubmit={handleModifyTask} className="flex justify-center flex-col rounded-md z-10 gap-4 border-gray-200 bg-white p-20 w-6/12">
                <input defaultValue={taskData.title} name="title" onChange={handleChange} className="rounded-md w-full shadow-md p-2"></input>
                <textarea defaultValue={taskData.body} name="body" onChange={handleChange} className="rounded-md w-full min-h-8 shadow-md p-2"></textarea>
                <div className='flex justify-center gap-4'>
                    <button type="submit" className='button bg-slate-200 rounded-md shadow-md p-2'>Save</button>
                    <button onClick={() => dispatch(removeTask(taskDataContext))} className='button bg-slate-200 rounded-md shadow-md p-2'>Delete</button>
                    <button onClick={() => setAppState({modifyState: false, taskData: undefined})} className='button rounded-md bg-slate-200 shadow-md p-2'>Cancel</button>
                </div>
            </form>
            <div className="absolute bg-gray-500 opacity-50 z-0 h-screen w-full"></div>
        </div>
    );
};

