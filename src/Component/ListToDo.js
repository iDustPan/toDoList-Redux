import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListToDo extends Component {
    render() {

        const todoLi = this.props.todos.map((todo, idx) => {
            return <li key={idx}>{todo}</li>;
        });

        return (
            <ul>
                {todoLi}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {todos: state.todo};
}

export default connect(mapStateToProps, null)(ListToDo)
