import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.EditHandler = this.EditHandler.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.changeTask=this.changeTask.bind(this);
    }
    /**delete this task from todo list when clicked trash button */
    deleteHandler() {
        this.props.deleteTodo(this.props.id);
    }
    /**Save task content after edit */
    submitChange(e) {
        e.preventDefault();
        this.props.saveTodo(this.props.id);
        //this.props.addTodo();
    }
    /**enable edit the content of this task in todo list */
    EditHandler() {
        this.props.editTodo(this.props.id);
    }
    /**save edited task and save */
    changeTask(e){
        e.preventDefault();
        this.props.changeHandler(e.target.value,this.props.id);
    }

    render() {
        if (!this.props.isEdit) {
            return (
                <div className="todo">
                    <span>{this.props.task}</span>
                    <div className="buttons">
                    <button onClick={this.EditHandler} >Edit</button>
                    <button name="delete" onClick={this.deleteHandler}>Delete</button>
                    </div>
                    
                </div>

            );
        } else {
            return (
                <div className="todo">
                    <form onSubmit={this.submitChange}>
                        <label htmlFor="todo"></label>
                        <input name="todo" type="text" value={this.props.content} onChange={this.changeTask} />
                        <button type="submit" >Save</button>
                    </form>
                </div>
            );
        }

    }
}
export default Todo;