import React from 'react';
import ReactDOM from 'react-dom';
function HomePage() {
    return (
        <div className="container">
            <h1>Hello</h1>
        </div>
    );
}

export default HomePage;

if (document.getElementById('homepage')) {
    
    ReactDOM.render(<HomePage />, document.getElementById('homepage'));
}