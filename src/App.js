
import React, { Component } from 'react';
// import './stylesheet/mediaqueries.css';
import './stylesheet/Firstpage.css';
import './stylesheet/Aboutme.css';
import './stylesheet/Skill.css';
import './stylesheet/Footer.css';
import './App.css';

import Profile from './components/Profile';
import Aboutme from './components/Aboutme';
import Skill from './components/Skill';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App my-app">      
        <Profile/>        
        <Skill/>
        <Aboutme/>
        <Footer/>
      </div>
    );
  }
}

export default App;
