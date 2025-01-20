import * as React from 'react';

const CreatedProjectContext = React.createContext<
	| [
			{ modifyState: boolean; taskData?: ITasks },
			React.Dispatch<
				React.SetStateAction<{ modifyState: boolean; taskData?: ITasks }>
			>
	  ]
	| { modifyState: boolean; taskData?: ITasks }
>({ modifyState: false, taskData: undefined });

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

function useModifyContext() {
	const context = React.useContext(CreatedProjectContext);
	if (context === undefined) {
		throw new Error('no context');
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [modifyState, setModifyState]: any = context;
	return [modifyState, setModifyState];
}

function AppCreatedProvider(props: Props) {
	const [modifyState, setModifyState] = React.useState<{
		modifyState: boolean;
		taskData?: ITasks;
	}>({ modifyState: false, taskData: undefined });

	const value = React.useMemo<
		[
			{ modifyState: boolean; taskData?: ITasks },
			React.Dispatch<
				React.SetStateAction<{ modifyState: boolean; taskData?: ITasks }>
			>
		]
	>(() => [modifyState, setModifyState], [modifyState]);

	return <CreatedProjectContext.Provider value={value} {...props} />;
}

export { AppCreatedProvider, useModifyContext };
