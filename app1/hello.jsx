import React from 'react';
import ReactDOM from 'react-dom';


 
class Hello extends React.Component {
  render() {
    return <h1>{this.props.data.text}</h1>
  }
}

export default Hello;


 
//ReactDOM.render(<Hello/>, document.getElementById('hello'));