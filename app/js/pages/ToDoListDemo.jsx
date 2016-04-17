/** Page to host the Redux Tutorial To Do List demo **/

import React from 'react';

import Countries from '../models/Countries';
import FilterableSelectionList from '../components/filterableselectionlist/FilterableSelectionList';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../components/todo/reducers'
import ToDoListApp from '../components/todo/components/ToDoListApp'

const styles = {
}

// Redux store as model for To do list:
let store = createStore(todoApp);

class ToDoListDemo extends React.Component {

    render() {
        return (
            <div className="to-do-demo">
                <p>Demo of the Todo application from the <a href="#">Redux tutorial</a>.</p>
                <Provider store={store}>
                    <ToDoListApp />
                </Provider>
            </div>
        );
    }
}

export default ToDoListDemo;