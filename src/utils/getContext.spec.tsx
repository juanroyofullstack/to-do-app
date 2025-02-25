import * as React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { AppCreatedProvider, useModifyContext } from './getContext';

const wrapper = ({
	children,
}: {
	children: string | JSX.Element | JSX.Element[];
}) => <AppCreatedProvider>{children}</AppCreatedProvider>;

describe('useModifyContext', () => {
	test('should throw an error if used outside of AppCreatedProvider', () => {
		const { result } = renderHook(() => useModifyContext());

		expect(result.error).toEqual(Error('no context'));
	});

	test('should provide the default context value', () => {
		const { result } = renderHook(() => useModifyContext(), { wrapper });

		expect(result.current[0]).toEqual({
			modifyState: false,
			taskData: undefined,
		});
	});

	test('should update the context value', () => {
		const { result } = renderHook(() => useModifyContext(), { wrapper });

		act(() => {
			result.current[1]({
				modifyState: true,
				taskData: {
					id: 1,
					title: 'Test Task',
					body: 'Test Body',
					column: 'toDo',
				},
			});
		});

		expect(result.current[0]).toEqual({
			modifyState: true,
			taskData: {
				id: 1,
				title: 'Test Task',
				body: 'Test Body',
				column: 'toDo',
			},
		});
	});
});
