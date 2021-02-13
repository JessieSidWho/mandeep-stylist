import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Title from '../Title';
import Home from '../Home';
import Services from '../Services';
// import Hair from '../Hair';
// import Form from '../Form';
import HerWork from '../HerWork';
import BookWithHer from '../BookWithHer';
import Location from '../Location';
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

                <div id='home' className="section ">
                  {/* <Form/> */}
                  <Home />
                  <Services/>
                  <HerWork/>
                  <BookWithHer />
                  <Location/>
                </div>

                {/* <div id='services' className="section">
                  
                </div>

                <div id='herWork' className="section">
                  
                </div>

                <div id='bookWithHer' className="section">
                  
                </div> */}
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