import { ColumnNames,COLUMNS } from './utils';

interface ColumnData {
    column: string;
    tasks: ITasks[];
}

export function getColumnData (column: string) {
    switch (column) {
    case ColumnNames.toDo:
        return COLUMNS[ColumnNames.toDo];
    case ColumnNames.inProgress:
        return COLUMNS[ColumnNames.inProgress];
    case ColumnNames.inReview:
        return COLUMNS[ColumnNames.inReview];
    case ColumnNames.Approved:
        return COLUMNS[ColumnNames.Approved];
    default:
        return 'No value found';
    }

}