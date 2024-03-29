import * as actionTypes from "../actionTypes";
import { ColumnNames } from '../../utils/index';

const initialState: DataStateInitial = {
    toDo: [
        {
            id: 1,
            title: "post 1",
            body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
            column: 'toDo'
        },
        {
            id: 2,
            title: "post 2",
            body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
            column: 'toDo'
        }
    ],
    inProgress: [
        {
            id: 1,
            title: "post 1",
            body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
            column: 'inProgress'
        }
    ],
    inReview: [
        {
            id: 1,
            title: "post 1",
            body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
            column: 'inReview'
        }
    ],
    Approved: [
        {
            id: 1,
            title: "post 1",
            body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
            column: 'Approved'
        }
    ]
};


export const dataReducer = (
    state = initialState,
    action: TaskAction
) => {
    switch (action.type) {
    case actionTypes.ADD_TASK: {
        const column = action.task.column;
        return {
            ...state,
            [column as ColumnNames]: [
                ...state[column as ColumnNames],
                {
                    id: Math.random(),
                    title: action.task.title,
                    body: action.task.body,
                    column: action.task.column
                }
            ]
        };
    }
    case actionTypes.MODIFY_TASK: {
        const column = action.task.column;
        return {
            ...state,
            [column as ColumnNames]: state[column as ColumnNames].map(
                (task) => task.id === action.task.id ? action.task
                    : task
            )
        };
    }
    case actionTypes.REMOVE_TASK: {
        const column = action.task.column;
        return {
            ...state,
            [column as ColumnNames]: state[column as ColumnNames].filter(i => i.id !== action.task.id)
        };
    }
    }
    return state;
};
