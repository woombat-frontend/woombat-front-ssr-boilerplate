import React from 'react'
import useGlobalState from '../global-state/useGlobalState'
import Context from '../global-state/context'
import '../styles/Index.css'

import Main from '../components/Main'

const Index = () => {

  const store = useGlobalState()

  return (
        <Context.Provider value={store}>
            <Main/>
        </Context.Provider>
    )
}

export default Index
