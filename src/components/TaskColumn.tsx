import React from 'react'
import { COLUMNS, ColumnNames } from './../utils/index'
import { TaskComponent } from './TaskComponent'
import './TaskColumn.scss'

export const TaskColumn = ({ data, identifier }: { data: ITasks[]; identifier: string }): JSX.Element => {
    const { title } = COLUMNS[identifier as ColumnNames]

    return <div className={`Column Column-${title}`}>
             <h2>{title}</h2>
             <div className={'Column-box'}>
                {data.map((task, i) => {
                   return (<TaskComponent key={i} title={task.title} body={task.body} />)
                })}
             </div>
        </div>
}