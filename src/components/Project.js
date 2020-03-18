import React, {Component} from 'react';
import './Project.css';
import github from '../assets/github.svg';
import lnk from '../assets/link.svg';
import Fade from 'react-reveal/Fade';

class Project extends Component{
  render(){
      return (
      <div className="mv6-ns ma2-ns ma4 mv5 pa4-l" id='project'>
      <Fade>
        <h1>Projects</h1>
      </Fade>
        <Fade bottom>
        <div className='flex flex-wrap justify-center pa3-ns'>

            <div className='tj h-80-l w-25-l w-70-m ma4 pa4 project relative-l'>
                <div className='flex justify-between'>
                    <a href="https://github.com/tichi97/Twitter-Data-Analyzer" target="_blank"><img alt='github' src={github} className='mb4'/></a>
                    <a href="https://mytwitter-data-analyzer.herokuapp.com/home" target="_blank"><img alt='link' src={lnk} className='mb4'/></a>
                </div>
                <h3 className='moon-gray'>Twitter Sentiment Analyzer</h3>
                <p className='dark-gray mb4'>An application that categorizes a user's tweet or tweets on a certain topic
                into positve or negative.</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap absolute-l bottom-2-l">
                <small className='moon-gray mr2'> Flask</small>
                <small className='moon-gray mr2'>Bootstrap</small>
                <small className='moon-gray'>Twitter API</small>
                </div>
            </div>

            <div className='tj h-80-l w-25-l w-70-m ma4 pa4 project relative-l'>
                <div className='flex justify-between'>
                    <a href="https://github.com/tichi97/connectFourJS" target="_blank"><img alt='github' src={github} className='mb4'/></a>
                    <a href="https://tichi97.github.io/connectFourJS/" target="_blank"><img alt='link' src={lnk} className='mb4'/></a>
                </div>
                <h3 className='moon-gray'>Connect Four</h3>
                <p className='dark-gray mb4'>A two player game with the aim of getting four of your pieces in a row.</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap absolute-l bottom-2-l">
                <small className='moon-gray mr2'>Javascript</small>
                <small className='moon-gray mr2'>Html/Css</small>
                <small className='moon-gray'>Tachyons</small>
                </div>
            </div>

            <div className='tj h-80-l w-25-l w-70-m ma4 pa4 project relative-l'>
                <div className='flex justify-between'>
                    <a href="https://github.com/tichi97/tipCalc" target="_blank"><img alt='github' src={github} className='mb4'/></a>
                    <a href="https://tichi97.github.io/tipCalc/" target="_blank"><img alt='link' src={lnk} className='mb4'/></a>
                </div>
                <h3 className='moon-gray'>Tip Calculator</h3>
                <p className='dark-gray mb4'>An application that calculates a tip amount according to three parameters. </p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap absolute-l bottom-2-l">
                <small className='moon-gray mr2'> Javascript</small>
                <small className='moon-gray mr2'>HTML/CSS</small>
                <small className='moon-gray'>Tachyons</small>
                </div>
            </div>

            <div className='tj h-80-l w-25-l w-70-m ma4 pa4 project relative-l'>
                <div className='flex justify-between'>
                   <a href="https://github.com/tichi97/Find-My-Tutor" target="_blank"><img alt='github' src={github} className='mb4'/></a>
                   <a href="https://find-my-tutor-app.herokuapp.com/" target="_blank"><img alt='link' src={lnk} className='mb4'/></a>
                </div>
                <h3 className='moon-gray'>Find My Tutor</h3>
                <p className='dark-gray mb4'>A flask web app that allows tutors to create
                profiles and connect with students via email requests</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap absolute-l bottom-2-l">
                <small className='moon-gray mr2'>Flask</small>
                <small className='moon-gray mr2'>Bootstrap</small>

                </div>
            </div>

            <div className='tj h-80-l w-25-l w-70-m ma4 pa4 project relative-l'>
                <div className='flex justify-between'>
                    <a href="https://github.com/tichi97/Dynamic-Form" target="_blank"><img alt='github' src={github} className='mb4'/></a>

                </div>
                <h3 className='moon-gray'>Dynamic Form</h3>
                <p className='dark-gray mb4'>An app that allows you to create a question with multiple choices
                and collect anonymous responses to the question.</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap absolute-l bottom-2-l">
                <small className='moon-gray mr2'> Node.js</small>
                <small className='moon-gray mr2'>Express</small>
                <small className='moon-gray mr2'>REST</small>

                </div>
            </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default Project;

