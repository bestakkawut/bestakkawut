


import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
        <section className="skill">
        {/* <div className="box"></div>   */}
        <h1>What I can do?</h1>    
          <div className="_top">    
            <h1>Web develop</h1>
            <div className="_box-icon">
              <div className="_responsive">
                <i className="fas fa-tablet-alt"></i>
                <i className="fas fa-desktop"></i>              
                <i className="fas fa-mobile-alt"></i>
              </div>
              <p>RESPONSIVE</p>
            </div>            
            <div className="_box-icon">
              <div>
                <i className="fas fa-code"></i>
              </div>
              <p>CODING</p>
            </div>
            <div className="_box-icon">
              <div>
                <i className="fas fa-drafting-compass"></i>
              </div>
              <p>DESIGN & UI/UX</p>
            </div>
          </div>  


          <div className="_bottom">      
          <h1>GIS for local government.</h1>
            <div className="_box-icon">
              <div>
                <i className="far fa-map"></i>
              </div>
              <p>DIGITIZE MAP</p>
            </div>
          </div>    
        </section>
    )
  }
};
