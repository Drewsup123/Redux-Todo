import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            inputText : '',
        };
    }

    onChangeHandler = e => {
        e.preventDefault();
        this.setState({
            inputText : e.target.value
        })
        // console.log(this.state.inputText);
    }

    onSubmit = e => {
        e.preventDefault();
        //Put a function in here to change the state of the application through props, make sure to have a value that passes in
        
    }

    render(){
        return(
            <div className="todo-form">
                <form onSubmit={this.onChangeHandler}>
                    <input
                        type="text" 
                        placeholder="add new todo"
                        value = {this.state.inputText}
                        onChange = {this.onChangeHandler}
                    />

                    <input type="submit" onClick={this.onSubmit} />
                </form>
            </div>
        );
    }
}

export default TodoForm;