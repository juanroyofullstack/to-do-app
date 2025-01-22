import * as React from 'react';

interface ContextValue {
	modifyState: boolean;
	taskData?: ITasks;
}

type ContextType = [
	ContextValue,
	React.Dispatch<React.SetStateAction<ContextValue>>
];

const CreatedProjectContext = React.createContext<ContextType | undefined>(
	undefined
);

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

function useModifyContext() {
	const context = React.useContext(CreatedProjectContext);
	if (context === undefined) {
		throw new Error('no context');
	}

	return context;
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
