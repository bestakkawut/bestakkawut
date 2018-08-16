
import React, { Component } from 'react';
// import './stylesheet/Firstpage.css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    this.Introduce.remove();
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  

  render() {

    const Introduce = () => {return (
      <div className="_introduce">
          <h1>AKKAWUT</h1>
          <h1>YONSUK</h1>
          <p>I’m interested in Web application & mobile application</p>
      </div>    
    )}
    const M_Introduce = () => {return (
      <div className="m_introduce">
        <div>
          <h1>HI</h1>
          <h1>IM</h1>
        </div>
        <div>
          <h1>AKKAWUT</h1>
          <h1>YONSUK</h1>
        </div>        
        <p>I’m interested in Web application & mobile application</p>
      </div>    
    )}
    function MobileLayout(){
      return (
        <section className="intro">
            <div className="content _left _top">
              <div className="_container">
                <M_Introduce/>
                <div className="picture"></div>
                <div className="social">
                  <span className="text _social">@BESTAKKAWUT ON SOCIALS</span><br/>
                  <span className="boxicon"><i className="fab fa-facebook-f"></i></span>   
                  <span className="boxicon"><i className="fab fa-instagram"></i></span>
                          
                </div>
              </div>            
            </div>
        </section>
      )
    }

    function DesktopLayOut(){
      return (
        <section className="intro">
            <div className="content _left _top">
              <div className="_container">
                <h1>HI,<span>I'M</span></h1>
                <div className="picture"></div>
                <div className="social">
                  <span className="text _social">@BESTAKKAWUT ON SOCIALS</span>
                  <span className="boxicon"><i className="fab fa-facebook-f"></i></span>   
                  <span className="boxicon"><i className="fab fa-instagram"></i></span>                        
                </div>
              </div>            
            </div>
            <div className="content _right _bottom">
              <div className="_container">
              <Introduce/>
              </div>            
            </div>
        </section>
      )
    }

    function RenderIntroduce(props) {
      const width = props.width;
      if(width<992){  
        return(
          <MobileLayout/>
        )          
      }else{
        return (
          <DesktopLayOut/>
        )        
      }
    }

    return (
      <div className="profile">      
        <RenderIntroduce width={this.state.width} />
        <section className="menu">
          <div className="_container">
          <button>WORK</button>
          <button>ABOUT ME</button>          
          <button>SKILL</button>
          </div>          
        </section>
      </div>
    );
  }
}

export default Profile;
