import * as React from 'react';
import { useSelector } from 'react-redux';

import { InscriptionForm } from './components/InscriptionForm';
import { BoardContainer } from './containers/BoardContainer';
import { selectProjectIsCreated } from './selectors/selectors';
import { AppCreatedProvider } from './utils/getContext';

function App(): JSX.Element {
	const isProjectCreated = useSelector(selectProjectIsCreated);

	return (
		<div
			className="App flex items-center w-full justify-center items-start md:h-screen sm:h-full"
			data-testid="App"
		>
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
			<AppCreatedProvider>
				{!isProjectCreated ? <InscriptionForm /> : <BoardContainer />}
			</AppCreatedProvider>
		</div>
	);
}

export default App;
