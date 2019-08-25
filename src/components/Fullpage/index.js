import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Title from '../Title';
import About from '../About';
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
          sectionsColor={['rgba(52,58,64,1)', 'rgba(52,58,64,.9)', 'rgba(52,58,64,.8)']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          licenseKey = {'3566E2E4-60464E6C-8FB465AF-EE7F2E22'}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">

                <div id='about' className="section section1">
                  <About />
                </div>

                <div id='portfolio' className="section">
                  
                </div>

                <div id='contact' className="section">
                        <Contact />
                   </div>
              </div>
            );
          }}
        />
        <Footer/>
      </>
    );
  }
}

export default FullpageWrapper;