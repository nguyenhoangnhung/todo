import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class TodoTask extends Component {
    onClickDelete = () => {
        const todo = this.props.todo;
        this.props.onDelete(todo)
    }

    render() {

        const todo = this.props.todo;
        return (
            <div className={"output"}>
                <input type={'checkbox'}/>
                <div className={"flex01"}>{todo}</div>
                <button onClick={this.onClickDelete}><FontAwesomeIcon icon={faTimes}/></button>
            </div>
        );
    }
}

export default TodoTask;