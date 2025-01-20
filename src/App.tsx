import * as React from 'react';
import { useSelector } from 'react-redux';

import { BoardContainer } from './containers/BoardContainer';
import { selectProjectIsCreated } from './selectors/selectors';
import { AppCreatedProvider } from './utils/getContext';

const InscriptionFormLazyLoaded = React.lazy(() =>
	import('./components/InscriptionForm').then(module => ({
		default: module.InscriptionForm,
	}))
);

function App(): JSX.Element {
	const isProjectCreated = useSelector(selectProjectIsCreated);

	return (
		<div
			className="App flex items-center w-full justify-center items-start md:h-screen sm:h-full"
			data-testid="App"
		>
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
			<AppCreatedProvider>
				{!isProjectCreated ? (
					<React.Suspense fallback={'Loading...'}>
						<InscriptionFormLazyLoaded />
					</React.Suspense>
				) : (
					<BoardContainer />
				)}
			</AppCreatedProvider>
		</div>
	);
}

export default App;
