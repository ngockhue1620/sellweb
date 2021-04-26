<<<<<<< HEAD

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

=======

import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import Header from './header'
import Table from './table'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="admin-container">
                    <div className="left"> 
                          <Table/>  
                    </div>
                    <div className="right">
                        note
                    </div>
                </div>
                
            </div>
        )
    }
}

>>>>>>> 6330437c5a8f4a5b40a175eaff7aeb4f99521942

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
