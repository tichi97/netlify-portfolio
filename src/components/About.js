import React, {Component} from 'react';
import profile from '../assets/profile.jpg';
import './About.css';
import python from '../assets/python.svg';
import Fade from 'react-reveal/Fade';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import flask from '../assets/flask.svg';
import html from '../assets/html.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import tachyons from '../assets/tachyons.svg';


class About extends Component{
  render(){
      return (
      <div className="mv6-ns ma2-ns mv5 pa4-ns ma4 flex justify-content-center" id='about'>
      <Fade bottom>
        <div className="about w-70-ns m-auto">
            <h1 className='tc pl4'>About Me</h1>
            <div className='flex-ns db flex-column-m flex-row-l ph2-ns '>
                <div className='w-50-l w-100 pa4'>
                    <p className='near-black f5-ns tj'>Hi, my name is Tichi! I am a software developer based in
                    Dallas, Texas. I love building elegant solutions through code and would love an opportunity
                    to work apply my skills and experience in a developer role working with motivated individuals
                    towards the advancement of the company.</p>
                    <p className='near-black f5-ns tj'>Here are some of the technologies I've been working with recently:
                    </p>
                </div>
                <div className='w-50-l w-100 pa4 flex flex-wrap justify-center'>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={javascript}/>
                    <img className="ma1" src={html}/>
                    <img className="ma1" src={css}/>
                    <img className="ma1" src={flask}/>
                    <img className="ma1" src={react}/>
                    <img className="ma1" src={bootstrap}/>
                    <img className="ma1" src={tachyons}/>


                </div>
            </div>
        </div>
    </Fade>
    </div>
    );
  }
}

export default About;

