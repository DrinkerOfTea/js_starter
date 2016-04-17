/** Page to host the Redux Tutorial To Do List demo **/

import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import board from '../components/noughtsandcrosses/reducers/board.js'
import NoughtsAndCrosses from '../components/noughtsandcrosses/components/NoughtsAndCrosses.jsx'

const styles = {
}

// Redux store as model for To do list:
let store = createStore(board);

class NoughtsAndCrossesDemo extends React.Component {

    render() {
        return (
            <div className="noughts-and-crosses-demo">
                <p>Demo of Noughts and Crosses component using React, Redux and Immutable</p>
                <Provider store={store}>
                    <NoughtsAndCrosses />
                </Provider>
            </div>
        );
    }
}

export default NoughtsAndCrossesDemo;