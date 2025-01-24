import { getColumnData } from './getColumnData';
import { ColumnNames, COLUMNS } from './utils';

describe('getColumnData', () => {
	test('should return the correct data for toDo column', () => {
		const result = getColumnData(ColumnNames.toDo);
		expect(result).toEqual(COLUMNS[ColumnNames.toDo]);
	});

	test('should return the correct data for inProgress column', () => {
		const result = getColumnData(ColumnNames.inProgress);
		expect(result).toEqual(COLUMNS[ColumnNames.inProgress]);
	});

	test('should return the correct data for inReview column', () => {
		const result = getColumnData(ColumnNames.inReview);
		expect(result).toEqual(COLUMNS[ColumnNames.inReview]);
	});

	test('should return the correct data for Approved column', () => {
		const result = getColumnData(ColumnNames.Approved);
		expect(result).toEqual(COLUMNS[ColumnNames.Approved]);
	});

	test('should return "No value found" for an unknown column', () => {
		const result = getColumnData('unknownColumn');
		expect(result).toBe('No value found');
	});
});
