export default class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>First post</h1>
                <div>cskcn</div>
                <div> helloworld <Button a={2}/> <Button a={3}>5</Button></div>
            </>
        );
    }
}

class Button extends React.Component {
    state = {
        value: "inout",
        c: 5,
        todoList: [1, 2, 3]

    }

    onChange = (e) => {
        const inputValue = e.target.value;
        console.log("input", inputValue)
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

    renderTodoList = () => {
        const todoList = this.state.todoList;
        const todoListToRender = [];
        for (let i = 0; i < todoList.length; i++) {
            const todo = todoList[i];
            todoListToRender.push(<div className={"output"}>{todo}</div>);
        }
        return todoListToRender;
    }

    renderA = () => {
        return [<div>a</div>, <div>b</div>]
    }

    render() {
        const result = this.props.a + this.state.c;
        return (
            <div >
                <div className={"container"}>
                    <input
                        className={"input01"}
                        placeholder={"Call to Marry? #hashtag (or select below)"} value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button className={"buttonAdd"} onClick={this.add}>CLick {this.state.value}</button>

                </div>
                {this.renderTodoList()}
            </div>

        );
    }
}