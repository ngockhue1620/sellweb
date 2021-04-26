// import React from 'react';
// import ReactDOM from 'react-dom';
// function HomePage() {
//     return (
//         <div className="container">
//             <h1>Hello</h1>
//         </div>
//     );
// }

// export default HomePage;

// if (document.getElementById('root')) {
    
//     ReactDOM.render(<HomePage />, document.getElementById('root'));
// r
import React, { Component } from 'react'
import Body from './body-components/Body'
import Header from './body-components/Header'
import Table from './body-components/Table'
import Content from './body-components/Content'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body>
                    <Table />
                    <Content />
                </Body>
                
            </div>
        )
    }
}
