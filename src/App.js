import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import TodayNews from './components/TodayNews';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <TodayNews/>
      </div>
    )
  }
}
