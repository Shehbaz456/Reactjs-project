import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize=6;
  apiKey= process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress=(process)=>{
    this.setState({progress:process})
  }
  render() {
    return (
      <div>
      <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />

      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} ></Route>
      <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} ></Route>
      <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
      <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
      <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
      <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apikKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
      </Routes>
      </Router>
      </div>
              
      
    )
  }
}
