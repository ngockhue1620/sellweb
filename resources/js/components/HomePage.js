import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Body from './Body'
import '../../sass/Body.scss'
function HomePage() {
    return (
        <div className="container">
            <Header></Header>
            <Body></Body>
        </div>
    );
}

export default HomePage;

if (document.getElementById('homepage')) {
    ReactDOM.render(<HomePage />, document.getElementById('homepage'));
}
