import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToDo } from '../Action/todoAction'

class AddToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onButtonClick() {
        this.props.addToDo(this.state.term);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onInputChange} />
                <button type="button" onClick={this.onButtonClick}>Add</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToDo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddToDo);
