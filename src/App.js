import './App.css';

import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  };
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render () {
    return (
      <div >
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="1" pageSize={6} category="general" heading="Home" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="2" pageSize={6} category="business" heading="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="3" pageSize={6} category="entertainment" heading="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="4" pageSize={6} category="general" heading="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="5" pageSize={6} category="health" heading="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="6" pageSize={6} category="science" heading="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="7" pageSize={6} category="sports" heading="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="8" pageSize={6} category="technology" heading="technology" />}></Route>

          </Routes>


        </Router>
      </div>
    )
  }
}
