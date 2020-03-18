import React, {Component} from 'react';
import './LandingPage.css';


class LandingPage extends Component{
  render(){
      return (
        <div className='vh-100-ns vw-100-ns' id='home'>
            <div className='landing vh-100 vw-100 landing-sm  flex justify-center items-center'>
                <div className=''>
                    <h2 className="f1 lh-title tc"></h2>
                    <h1 className="f-subheadline lh-title tc overflow-auto-ns nowrap-ns ">Nyatichi Kenani</h1>
                    <h2 className="f2 lh-title tc overflow-auto-ns nowrap-ns tracked-mega-ns">Software Developer</h2>
                </div>
            </div>

        </div>
    );
  }
}

export default LandingPage;

