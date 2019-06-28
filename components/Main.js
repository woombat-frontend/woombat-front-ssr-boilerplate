import React, { useContext } from 'react'
import '../styles/Main.css'
import Context from '../global-state/context';

const Main = () => {

    const { state, actions } = useContext(Context)

    return (
        <div className="welcome-container">
            <img style={{ alignSelf: "center" }} width={50} src="https://i.imgur.com/PytOEZD.png" alt=":D" />
            <h2 className="title">Bienvenido a Woombat Frontend Team</h2>
            <h4 className="subtitle">¡Buena suerte en este proyecto!</h4>
            <h4 className="subtitle">!Server Side Rendering¡</h4>
        </div>
    )
}

export default Main;
