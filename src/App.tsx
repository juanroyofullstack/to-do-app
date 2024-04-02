import * as React from 'react';
import { useSelector } from 'react-redux';

import { BoardContainer } from './containers/BoardContainer';
import type { RootState } from './store/index';
import { AppCreatedProvider } from './utils/getContext';

import './App.css';

const InscriptionFormLazyLoaded = React.lazy(() =>
  import('./components/InscriptionForm').then((module) => ({
      default: module.InscriptionForm
  }))
);

function App(): JSX.Element {
    const isProjectCreated = useSelector((state: RootState) => state.project.created);

    return (
        <div className="App" data-testid={"App"}>
            <AppCreatedProvider>
                { !isProjectCreated ?
                    <React.Suspense fallback={'Loading...'}>
                        <InscriptionFormLazyLoaded />
                    </React.Suspense>
                    : <BoardContainer /> }
            </AppCreatedProvider>
        </div>
    );
}

export default App;
