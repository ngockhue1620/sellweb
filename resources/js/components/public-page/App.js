
import {
  BrowserRouter as Router, // bao boc app cua minh
  Switch, // switch 
  Route, // case => path, exact 
  Link // <a></a> 
} from "react-router-dom"

import React, { Component, Suspense, lazy } from 'react'
const HomePage = lazy(() => import('./HomePage'))
// const TestPage = lazy(() => import('./test'))
// const PageLogin = lazy(() => import('./pageLogin'))
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' render={props => (
              <HomePage {...props} />
            )}/>
            
          </Switch>
        </Suspense>
      </Router>
      </div>
    )
  }
}