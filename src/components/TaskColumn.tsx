import React from 'react'
import './TaskColumn.scss'

export const TaskColumn = ({ title }: { title: string }): JSX.Element => {
    return <div className={`Column Column-${title}`} key={title}>
             <h2>{title}</h2>
             <div className={'Column-box'}></div>
        </div>
}