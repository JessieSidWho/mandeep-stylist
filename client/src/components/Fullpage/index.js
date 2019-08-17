import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Title from './../Title';
import About from './../About';
import { Salon, Hair, Makeup } from './../Portfolio';
// import Contact from './../Contact';
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
        <Title />

        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={["#CBC5C1", "#A2ABB0", '']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">

                <div id='about' className="section section1">
                  <About />
                </div>

                <div id='portfolio' className="section">
                  {/* <Salon/> */}
                  <Hair/>
                  <Makeup />
                </div>

                <div id='contact' className="section">
                        {/* <Contact /> */}
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