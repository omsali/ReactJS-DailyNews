
import './App.css';

import React, { Component } from 'react'
import Navbar from './compnents/Navbar';
import NewsComponent from './compnents/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/business"><NewsComponent key="business" pageSize={this.pageSize} country='in' category="business"/></Route>
            <Route exact path="/entertainment"><NewsComponent key="entertainment" pageSize={this.pageSize} country='in' category="entertainment"/></Route>
            <Route exact path="/general"><NewsComponent key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
            <Route exact path="/health"><NewsComponent key="health" pageSize={this.pageSize} country='in' category="health "/></Route>
            <Route exact path="/science"><NewsComponent  key="science" pageSize={this.pageSize} country='in' category="science"/></Route>
            <Route exact path="/sports"><NewsComponent key="sports" pageSize={this.pageSize} country='in' category="sports"/></Route>
            <Route exact path="/technology"><NewsComponent key="technology" pageSize={this.pageSize} country='in' category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

