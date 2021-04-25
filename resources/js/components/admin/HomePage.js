
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


if (document.getElementById('homepage')) {
    
    ReactDOM.render(<HomePage />, document.getElementById('homepage'));
}