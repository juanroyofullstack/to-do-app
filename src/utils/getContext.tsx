import * as React from 'react';

const CreatedProjectContext = React.createContext<[{ modifyState: boolean; taskData?: ITasks }, 
    React.Dispatch<React.SetStateAction<{ modifyState: boolean; taskData?: ITasks }>>] | 
    { modifyState: boolean; taskData?: ITasks }>({ modifyState: false, taskData: undefined });

type Props = {
    children: string | JSX.Element | JSX.Element[];
  }
  
function useAppContext () {
    const context = React.useContext(CreatedProjectContext);
    if(context === undefined) {
        throw new Error('no context');
    }
 
    const [appState, setAppState]: any = context;
    return [appState, setAppState];
    
}

function AppCreatedProvider(props: Props) {
    const [appState, setAppState] = React.useState<{ modifyState: boolean; taskData?: ITasks }>
    ({ modifyState: false, taskData: undefined });

    const value = React.useMemo<[{ modifyState: boolean; taskData?: ITasks }, 
        React.Dispatch<React.SetStateAction<{ modifyState: boolean; taskData?: ITasks }>>]>(
            () => [appState, setAppState], [appState]);

    return (<CreatedProjectContext.Provider value={value} {...props} />);
}

export { AppCreatedProvider, useAppContext };
