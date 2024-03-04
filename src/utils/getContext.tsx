import * as React from 'react'

const CreatedProjectContext = React.createContext<{ created: boolean }>({ created: false })

type Props = {
    children: string | JSX.Element | JSX.Element[];
  }
  
function useAppContext () {
    const context: any = React.useContext(CreatedProjectContext)
    if(context === undefined) {
         throw new Error('no context')
    }
 
    const [appState, setAppState] = context;
    return [appState, setAppState]
    
}

function AppCreatedProvider(props: Props) {
    const [appState, setAppState] = React.useState<React.SetStateAction<{ created: boolean } | undefined>>({ created: false })
    const value: any = React.useMemo(() => [appState, setAppState], [appState])

    return (<CreatedProjectContext.Provider value={value} {...props} />)
  }

  export { AppCreatedProvider, useAppContext }
