import React from 'react';
import ReactDOM from 'react-dom';
import Button from  './button.jsx'
import Todo from  './todo.jsx'

class World extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            todos: []

        };
        // this.setState ({  });
    }

    //arrow functions automatically binds this
    // alternative is to use

    //handleClick() {
    //
    //
    //}
    //
    //but then  this.handleClick = this.handleClick.bind(this); in constructor is required

    handleClickAddTODO = (e) => {

        this.setState({count: this.state.count + 1});
        var results = this.state.todos;
        results.push({id: Math.random(), text: "todo"});
        this.setState({todos: results});

    };

    handleRemove = (e)=> {


    };


    render() {

        var todos_list = this.state.todos;
        var button = {text: "Add TODO"};

        //boundclick is for exposing Component Functions
        var boundClick = this.handleClickAddTODO.bind(this);


        return (

            <p>TODOS:{this.state.count}<br />
                <Button onClick={boundClick} data={button}/>
                {todos_list.map(function(todo_item) {
                    return <Todo key={todo_item.id} data={todo_item}/>;
                    })}
            </p>



        )
    }
}

ReactDOM.render(<World/>, document.getElementById('world'));