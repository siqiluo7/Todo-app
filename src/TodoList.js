import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid/v4';
import AddForm from './AddForm';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.saveHandler =this.saveHandler.bind(this);
    }



    addTodo(task) {
        let newTask = { ...task, id: uuid(), isEdit: false };
        this.setState(state => {
            return { todos: [...state.todos, newTask] }
        }
        )
    }
    editTodo(id) {
        this.setState(state => {
            return { todos: state.todos.map(m => { if (m.id === id) m.isEdit = true; return m }) }
        })
    }
    saveHandler(id){
        this.setState(state => {
            return { todos: state.todos.map(m => { if (m.id === id) m.isEdit = false; return m }) }
        })
    }
    deleteTodo(id) {
        this.setState(state => {
            return { todos: state.todos.filter(t => { return t["id"] !== id; }) }
        })
    }
    changeHandler(value, id) {
        this.setState(state => {
            return {
                todos: state.todos.map(m => {
                    if (m.id === id) {
                        m.isEdit = true;
                        m.task = value;
                    }
                    return m;
                })
            }
        })
    }
    drawList() {
        let lists = [];

        for (let i = 0; i < this.state.todos.length; i++) {

            lists.push(<Todo saveTodo={this.saveHandler} content={this.state.todos[i].task} name="todo" changeHandler={this.changeHandler} editTodo={this.editTodo} isEdit={this.state.todos[i].isEdit} deleteTodo={this.deleteTodo} task={this.state.todos[i].task} id={this.state.todos[i].id} />);
        }
        return lists;
    }
    render() {
        return (
            <div>
                {this.drawList()}
                <AddForm addTodo={this.addTodo} />
            </div>
        );
    }
}
export default TodoList;