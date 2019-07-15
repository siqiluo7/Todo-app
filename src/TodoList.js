import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid/v4';
import AddForm from './AddForm';


class TodoList extends Component {

constructor(props){
super(props);
this.state={
    todos:[]
}
this.addTodo=this.addTodo.bind(this);
this.deleteTodo=this.deleteTodo.bind(this);
}



addTodo(task){
    let newTask={...task,id: uuid()};
    //let newTodos=[...this.state.todos,newTask];
this.setState(state=>{
    return {todos:[...state.todos,newTask]}
}
)
}
deleteTodo(id){
this.setState(state=>{
    return {todos:state.todos.filter(t=>{return t["id"]!==id;})}
})
}
drawList(){
    let lists=[];
    
    for(let i=0;i<this.state.todos.length;i++){
        
       lists.push( <Todo  isEdit={this.state.todos[i].isEdit} deleteTodo={this.deleteTodo} task={this.state.todos[i].task} id={this.state.todos[i].id}/>);
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