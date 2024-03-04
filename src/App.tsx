

import * as React from 'react'
import { useSelector } from 'react-redux';

import { InscriptionForm } from './components/InscriptionForm'
import { BoardContainer } from './containers/BoardContainer'
import type { RootState } from './store/index'

import './App.css';

function App() {
const isProjectCreated = useSelector((state: RootState) => state.projectData.project.created)

  return (
    <div className="App">
      { !isProjectCreated ?
        <InscriptionForm />
      : <BoardContainer /> }
    </div>
  );
}

export default App;
