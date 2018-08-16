import React, { Component } from 'react';

export default class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme">
        <h1 className="head-title">ABOUT ME</h1>
        <section className=" _timeline">
            <h1 className="_headtext">EDUCATION</h1>
            <div className="_content-box _vocert">
                <h1>VOCATION CERTIFICATE</h1>
                <div className="_info">
                    <div className="_years"><span>2007-2010</span></div>
                    <div><span>HATYAI TECHNICAL COLLEGE</span></div>
                </div>                
            </div>
            <div className="_content-box _univers">
                <h1>BACHELOR OF COMPUTER ENGINEERING</h1>
                <div className="_info">
                    <div className="_years"><span>2010-2015</span></div>
                    <div><span>RAJAMANGALA UNIVERSITY OF TECHNOLOGY SRIVIJAYA</span></div>
                </div>                
            </div>
            <h1 className="_headtext">AFTER</h1>
            <div className="_content-box _military">
                <div className="_info">
                    <div className="_years"><span>2015-2016</span></div>
                    <div><span>MILITARY SERVICE</span></div>
                </div>   
            </div>
            <div className="_content-box _employ">
                <div className="_info">
                    <div className="_years"><span>2016-2017</span></div>
                    <div><span>EMPLOYEE FOR APOLLOYONT</span></div>
                </div>
            </div>
            <div className="_line"></div>
            <h1 className="_headtext">FREELANCE</h1>
            <div className="_content-box _freelance">
             <div>              
                <p>Web & Software Delveloper</p>
             </div>  
             <div>
                <p>Digitize work for local government</p>
             </div>  
            </div>
        </section>
      </div>
    )
  }
};
