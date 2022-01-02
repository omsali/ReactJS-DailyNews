
import './App.css';

import React, { Component } from 'react'
import Navbar from './compnents/Navbar';
import NewsComponent from './compnents/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsComponent pageSize={6} country='in' category="general"/>
      </div>
    )
  }
}

