import React from 'react';

export const TaskComponent = ({title, body}: {title: string; body: string}) => { 
    return (<div>
        <span>{title}</span>
        <p>{body}</p>
    </div>);
};