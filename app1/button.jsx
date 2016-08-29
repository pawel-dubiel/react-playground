import React from 'react';
import ReactDOM from 'react-dom'

export default Button;

class Button extends React.Component {
    render() {
        return <a onClick={this.props.onClick}>{this.props.data.text}</a>
    }
}

export default Button;
