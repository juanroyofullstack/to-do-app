import React, { useState } from 'react'
import './TaskColumn.scss'

export const TaskColumn = ({ title }: { title: string }) => {
    return <div className={`Column Column-${title}`} key={title}>
             <h2>{title}</h2>
             <div className={'Column-box'}></div>
        </div>
}