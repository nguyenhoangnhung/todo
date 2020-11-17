import TodoTask from "../components/TodoTask";
import React from "react";

export default class Hello extends React.Component {
    render() {
        return (
            <>

                <div> helloworld <TodoList a={2}/></div>
            </>
        );
    }
}

class TodoList extends React.Component {
    state = {
        value: "",
        todoList: [1, 2, 3]

    }

    onChange = (e) => {
        const inputValue = e.target.value;
        this.setState({value: inputValue})
    }

    multiply = () => {
        this.setState({value: "input"})
    }

    add = () => {
        const value = this.state.value;
        const todoList = this.state.todoList;
        todoList.push(value);
        this.forceUpdate();
    }
    onDelete = (todo) => {
        const todoList = this.state.todoList;
        const newTodoList = [];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i] === todo) {
                continue;
            }
            newTodoList.push(todoList[i]);
        }
        const todoL = todoList.filter(todoElement => todoElement !== todo);
        this.setState({todoList: newTodoList})
    }

    renderTodoList = () => {
        const todoList = this.state.todoList;
        const todoListToRender = [];
        for (let i = 0; i < todoList.length; i++) {
            const todo = todoList[i];
            todoListToRender.push(<TodoTask todo={todo} onDelete={this.onDelete}/>);
        }
        return todoListToRender;
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <input
                        className={"input01"}
                        placeholder={"Call to Marry? #hashtag (or select below)"} value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button className={"buttonAdd"} onClick={this.add}>Add Task</button>

                </div>
                {this.renderTodoList()}
            </div>

        );
    }
}