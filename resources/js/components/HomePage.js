import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Body from './Body'
import '../../sass/Body.scss'
function Example() {
    return (
        <div className="container">
            <Header></Header>
            <Body></Body>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
