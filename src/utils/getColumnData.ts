import { ColumnNames, COLUMNS } from './utils';

interface ColumnData {
	title: string;
	identifier: string;
}

export function getColumnData(column: string): ColumnData | string {
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
