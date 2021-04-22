import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Body from './Body'
import '../../../sass/Body.scss'
function HomePage() {
    return (
        <div className="container">
            <Header></Header>
            <Body/>
            
        </div>
    );
}

export default HomePage;



