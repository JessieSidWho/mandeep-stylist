import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Title from './../Title';
import About from './../About';
import "./styles.css";
 
class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
      <Title id='' style={{}}/>

      <ReactFullpage
        
        scrollOverflow={true}
        sectionsColor={["rgba(0,0,0,.1)", "#CBC5C1", "#A2ABB0"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">

              <div id='about' className="section section1">
                <About/>
              </div>

              <div id='portfolio' className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>

              <div id='contact' className="section">
                <h3>Section 3</h3>
              </div>
            </div>
          );
        }}
      />
      </>
    );
  }
}

export default FullpageWrapper;