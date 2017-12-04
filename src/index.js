
import React from "react";
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ListToDo from './Component/ListToDo';
import AddToDo from './Component/AddToDo';
import { todoReducer } from './Reducer/todoReducer';


const store = createStore(
    combineReducers({todo: todoReducer}),
    {}
);

ReactDom.render(
    <Provider store={store}>
        <div>
            <ListToDo />
            <AddToDo />
        </div>
    </Provider>,
    document.getElementById('app')
);
