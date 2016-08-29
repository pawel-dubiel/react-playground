import React from 'react';
import ReactDOM from 'react-dom'

export default Todo;

class Todo extends React.Component {
    render() {
        return <li>

            <input type="checkbox" /> { this.props.data.text }

        </li>
    }
}

export default Todo;
