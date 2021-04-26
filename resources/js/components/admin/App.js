import {
  BrowserRouter as Router, // bao boc app cua minh
  Switch, // switch 
  Route, // case => path, exact 
  Link // <a></a> 
} from "react-router-dom"

import React, { Component, Suspense, lazy } from 'react'
import About from "./About/About"
const HomePage = lazy(() => import('./HomePage'))
// const TestPage = lazy(() => import('./test'))
const LoginPage = lazy(() => import('./LoginPage'))
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
            <Route exact path='/login' render={props => (
              <LoginPage {...props} />
            )}/>

            <Route exact path='/about' render={props => (
              <About {...props} />
            )}/>
            
          </Switch>
        </Suspense>
      </Router>
      </div>
    )
  }
}