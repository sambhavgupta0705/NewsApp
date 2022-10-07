import './App.css';

import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import dotenv from 'react-dotenv'
require('dotenv').config()
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY
  pageSize=6;
  
  render() {
    return (
      <div>
        <Router>

       <Navbar/>
       
       <Routes>
       <Route exact path="" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />}/>
       <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business" />}/>
       <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment" />}/>
       <Route exact path="/general" element={<News  key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />}/>
       <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health" />}/>
       <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science" />}/>
       <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports" />}/>
       <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology" />}/>




        </Routes>
      </Router>
       

      </div>
    )
  }
}

export default App



