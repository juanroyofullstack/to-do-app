import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editTask, removeTask } from '../store/actionCreators';
import { useAppContext } from '../utils/getContext';

export const TaskEditorModal = (): JSX.Element => {
    const [appState, setAppState] = useAppContext();
    const { taskData: taskDataContext } = appState;
    const [taskData, setTaskData] = useState<ITasks>(taskDataContext);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    return(
        <div className='TaskEditorModal'>
            <form onSubmit={handleModifyTask}>
                <input defaultValue={taskData.title} name="title" onChange={handleChange}></input>
                <input defaultValue={taskData.body} name="body" onChange={handleChange}></input>
                <button type="submit">save</button>
                <button onClick={handleDeleteTask}>delete</button>
                <button>cancel</button>
            </form>
        </div>);
};

