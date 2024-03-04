import React from 'react'
import { useSelector } from 'react-redux';

import { TaskColumn } from '../components/TaskColumn'
import type { RootState } from '../store/index'
import { utils } from '../utils/index'
import './BoardContainer.scss'

export const BoardContainer: React.FC = (): JSX.Element => {
    const { name, projectname } = useSelector((state: RootState) => state.projectData.project)

    const columns = utils['COLUMNS']
    return (
        <div className={'BoardContainer'}>
            <h1>Welcome {name}</h1>
            <h2>{projectname}</h2>
            <div className='BoardContainer-container'>
                {columns.map((column, id) => (<TaskColumn key={id} title={column.title}/>))}
            </div>
        </div>
    )
}