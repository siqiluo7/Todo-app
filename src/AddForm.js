import React, { Component } from 'react';
import './AddForm.scss';



class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',


        }
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHandler(e) {

        e.preventDefault();

        this.props.addTodo(this.state);

        this.setState(state => { return { task: " " }; });

    }

    changeHandler(e) {
        this.setState(
            { [e.target.name]: e.target.value }

        )
    }

    render() {
        return (
            <div className="addForm">

                <p>New Todo</p>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="task" value={this.state.task} onChange={this.changeHandler} />
                    <button type="submit" > Add</button>
                </form>

            </div>
        );
    }
}
export default AddForm;