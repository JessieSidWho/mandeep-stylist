import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Title from '../Title';
import Home from '../Home';
import About from '../About';
import HerWork from '../HerWork';
import Contact from '../Contact';
import Footer from '../Footer';
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
          sectionsColor={['rgba(52,58,64,)', 'rgba(52,58,64,)', 'rgba(52,58,64,)', 'rgba(52,58,64,)']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          licenseKey = {'3566E2E4-60464E6C-8FB465AF-EE7F2E22'}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">

                <div id='home' className="section section1 ">
                  <Home />
                </div>

                <div id='about' className="section">
                  <About/>
                </div>

                <div id='herWork' className="section">
                  <HerWork/>
                </div>

                <div id='contact' className="section">
                  <Contact />
                </div>
              </div>
            );
          }}
        />
        <div id='footer'>
          <Footer/>
        </div>
      </>
    );
  }
}

export default FullpageWrapper;