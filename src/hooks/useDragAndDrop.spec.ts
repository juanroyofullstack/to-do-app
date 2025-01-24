import { act, renderHook } from '@testing-library/react-hooks';

import { useDragAndDrop } from './useDragAndDrop';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
}));

describe('useDragAndDrop', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	test('should return isDragging as false when first called', () => {
		const { result } = renderHook(() => useDragAndDrop());

		expect(result.current.isDragging).toBe(false);
	});

	test('should return isDragging as true when handleDragging is called with true as props', () => {
		const { result } = renderHook(() => useDragAndDrop());
		result.current.handleDragging(true);

		expect(result.current.isDragging).toBe(true);
	});

	test('should return handleUpdateList have been called with the task and column to be updated', () => {
		const { result } = renderHook(() => useDragAndDrop());
		const spy = jest.spyOn(result.current, 'handleUpdateList');

		act(() => {
			result.current.handleUpdateList(
				{
					id: 1,
					title: 'Test Task',
					body: 'Test Body',
					column: 'toDo',
				},
				'inProgress'
			);
		});

		expect(spy).toHaveBeenCalledWith(
			{
				id: 1,
				title: 'Test Task',
				body: 'Test Body',
				column: 'toDo',
			},
			'inProgress'
		);
	});
});
