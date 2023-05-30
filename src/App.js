import './App.css';

import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render () {
    return (
      <div >
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="1" pageSize={6} category="general" heading="Home" />}></Route>
            <Route exact path="/business" element={<News key="2" pageSize={6} category="business" heading="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="3" pageSize={6} category="entertainment" heading="entertainment" />}></Route>
            <Route exact path="/general" element={<News key="4" pageSize={6} category="general" heading="general" />}></Route>
            <Route exact path="/health" element={<News key="5" pageSize={6} category="health" heading="health" />}></Route>
            <Route exact path="/science" element={<News key="6" pageSize={6} category="science" heading="science" />}></Route>
            <Route exact path="/sports" element={<News key="7" pageSize={6} category="sports" heading="sports" />}></Route>
            <Route exact path="/technology" element={<News key="8" pageSize={6} category="technology" heading="technology" />}></Route>

          </Routes>


        </Router>
      </div>
    )
  }
}
