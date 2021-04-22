
import{​​​​​​​​    
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch 
    Route, // case => path, exact 
    Link// <a></a> 
}​​​​​​​​ from "react-router-dom"
 
import React, {​​​​​​​​ Component, Suspense, lazy }​​​​​​​​ from 'react';
import Body from "./Body";
import Test from "./Test";

const Body = lazy(() => import('./Body'))
const Test = lazy(() => import('./Test'))

export default class RedirectPage extends Component {​​​​​​​​
render() {​​​​​​​​
    return (
    <div>
        <Router>
            <Suspense>
                <Switch>
                <Route exact path="/"  render={props=>(<Body {...props}/> )}/>
                <Route exact path="/about"  render={props=>(<Test {...props}/> )}/>
                
                </Switch>
            </Suspense>
        </Router>
    </div>
        )
  }​​​​​​​​
}​​​​​​​​

 

