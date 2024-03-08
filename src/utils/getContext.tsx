import * as React from 'react';

const CreatedProjectContext = React.createContext<[{ created: boolean }, React.Dispatch<React.SetStateAction<{ created: boolean }>>] | { created: boolean }>({ created: false });

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
    const [appState, setAppState] = React.useState<{ created: boolean }>({ created: false });
    const value = React.useMemo<[{ created: boolean }, React.Dispatch<React.SetStateAction<{ created: boolean }>>]>(() => [appState, setAppState], [appState]);

    return (<CreatedProjectContext.Provider value={value} {...props} />);
}

export { AppCreatedProvider, useAppContext };
