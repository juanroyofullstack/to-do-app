

import * as React from 'react';
import { useSelector } from 'react-redux';

import { InscriptionForm } from './components/InscriptionForm';
import { BoardContainer } from './containers/BoardContainer';
import type { RootState } from './store/index';

import './App.css';

function App(): JSX.Element {
    const isProjectCreated = useSelector((state: RootState) => state.project.created);

    return (
        <div className="App" data-testid={"App"}>
            { !isProjectCreated ?
                <InscriptionForm />
                : <BoardContainer /> }
        </div>
    );
}

export default App;
