var React = require('react');
var ReactDOM = require('react-dom');

class Title extends React.Component {
    render() {
        return <h1>React List Manager</h1>;
    }
}

ReactDOM.render(<Title/>, document.getElementById('app'));