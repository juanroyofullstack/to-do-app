import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from './utils/index';
import App from './App';

const mockStore = configureStore();
const store = mockStore({
    project: { created: true },
    data: initialState
});

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>);
    const linkElement = screen.getByTestId(/App/i);
    expect(linkElement).toBeTruthy();
});