
import './App.css';

import * as React from 'react'

import { InscriptionForm } from './components/InscriptionForm'
import { BoardContainer } from './containers/BoardContainer'

import type { RootState } from './store/index'
import { useSelector } from 'react-redux';

function App() {
const isProjectCreated = useSelector((state: RootState) => state.projectData.project.created)

  return (
    <div className="App">
      {!isProjectCreated ?
        <InscriptionForm />
      : <BoardContainer />}

    </div>
  );
}

export default App;
