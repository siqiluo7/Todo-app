import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
         super(props);
         this.deleteHandler=this.deleteHandler.bind(this);
    }

deleteHandler(){
  this.props.deleteTodo(this.props.id);
}




    render() {
        return (
            <form>
            <label htmlFor="todo">Todo:</label>
            <span>{this.props.task}</span>
            <input name="todo" type="text" />
            <button type="submit">Edit</button>
            <button name="delete" onClick={this.deleteHandler}>Delete</button>
          </form>
        );
    }
}
export default Todo;