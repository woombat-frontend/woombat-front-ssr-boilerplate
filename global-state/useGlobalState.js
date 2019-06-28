import { useState } from 'react'

const State = {}

const useGlobalState = () => {
    const [state, setState] = useState(State)

    const actions = action => {
        const { type, payload } = action

        switch (type) {
            default: return state;
        }
    }
    return { state, actions }
}

export default useGlobalState
