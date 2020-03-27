import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Contact extends Component{
  render(){
      return (
      <div className="mv6-ns ma2-ns mv5 pa4-ns ma4 flex items-center justify-content-center" id='contact'>
      <Fade>
        <div className="w-70-ns m-auto">
            <h1 className='tc pl4'>Get in touch!</h1>
            <p>Feel free to contact me below. Looking forward to hearing from you!</p>
            <a className='link' href="mailto:kenanitichi@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className='pa3 ba bg-white-90 near-black bg-animate hover-bg-near-black hover-white pointer'>
                Contact Me
              </button>
            </a>
        </div>
      </Fade>
      </div>
    );
  }
}

export default Contact;

