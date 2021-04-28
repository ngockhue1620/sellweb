import {
  BrowserRouter as Router, // bao boc app cua minh
  Switch, // switch 
  Route, // case => path, exact 
  Link // <a></a> 
} from "react-router-dom"

import React, { Component, Suspense } from 'react'
import HomePage from './HomePage'
import About from "../About/About"
import Header from "./components/Header/Header"




export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header></Header>
            <Switch>
              <Route exact path='/' render={props => (
                <HomePage {...props} />
              )} />

              <Route exact path='/about' render={props => (
                <About {...props} />
              )} />

              

            </Switch>
          </Suspense>
        </Router>
      </div>
    )
  }
}