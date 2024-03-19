import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editTask, removeTask } from '../store/actionCreators';

export const TaskComponent = ({ task }: {task: ITasks}) => { 
    const [taskData, setTaskData] = useState<ITasks>(task);
    const [modifyState, setModifyState] = useState<boolean>(false);
    const { title, body } = taskData;
    
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setTaskData(prevData => ({...prevData, [name]: value}));
    };

    const handleModifyTask = (e: React.SyntheticEvent): TaskAction => {
        e.preventDefault();
        setModifyState(!modifyState);
        return dispatch(editTask(taskData));
    };

    const handleDeleteTask = () => {
        return dispatch(removeTask(task));
    };

    return (
        <div>
            {modifyState ?
                <>
                    <form onSubmit={handleModifyTask}>
                        <input defaultValue={title} name="title" onChange={handleChange}></input>
                        <input defaultValue={body} name="body" onChange={handleChange}></input>
                        <button type="submit">save</button>
                        <button onClick={handleDeleteTask}>delete</button>
                        <button onClick={()=> {setModifyState(!modifyState);}}>cancel</button>
                    </form>
                </>
                :             
                <>
                    <span>{title}</span>
                    <p>{body}</p>
                </>
            }
            <button onClick={()=> {setModifyState(true);}}>modify</button>
        </div>
    );
};