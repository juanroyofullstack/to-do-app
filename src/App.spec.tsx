import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { initialState } from './utils/index';
import App from './App';

const mockStore = configureStore();
const store = mockStore({
    project: { created: true },
    data: initialState
});

test('renders learn react link', () => {
    const { container } = render(
        <Provider store={store}>
            <App />
        </Provider>);
    const linkElement = container.getByTestId(/App/i);
    expect(linkElement).toBeTruthy();
});