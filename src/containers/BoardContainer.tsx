import React from 'react'

import { utils } from '../utils/index'
import { TaskColumn } from '../components/TaskColumn'
import './BoardContainer.scss'

export const BoardContainer = (): JSX.Element => {
    const columns = utils['COLUMNS']
    return (
        <div className={'BoardContainer'}>
            {columns.map((column, id) => (<TaskColumn key={id} title={column.title}/>))}
        </div>
    )
}