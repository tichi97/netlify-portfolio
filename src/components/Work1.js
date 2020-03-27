import React , {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Experience.css';

class Work1 extends Component{
    render(){
        return(
            <div className='tl ph4 work'>
                <h3 className='near-black'>Wake-up Womens Organization</h3>
                <small className='moon-gray'>2019 - 2020</small>
                <small className='moon-gray'><a href="https://wake-upwawo.org/" target="_blank" className='moon-gray link pointer'>View website</a></small>
                <ul className="tl">
                    <li className='pa2'>Analyzed user needs to determine the technical requirements for their website</li>
                    <li className='pa2'>Designed, built, and maintained a user-friendly website using scripting languages, content creation tools and digital media</li>
                    <li className='pa2'>Identified problems uncovered by testing or customer feedback, and effectively corrected them</li>
                    <li className='pa2'>Performed web site updates as per client requestd</li>
                </ul>
            </div>
        );
    }
}
class Work2 extends Component{
    render(){
        return(
            <div className='tl ph4 work'>
                <h3 className='near-black'>Jamii Telecommunications</h3>
                <small className='moon-gray'>2016</small>
                <ul className="tl">
                    <li className='pa2'>Worked with end users to resolve their software and hardware issues efficiently</li>
                    <li className='pa2'>Located root causes of technical errors and implemented prompt and effective solutions</li>
                    <li className='pa2'>Provided remote support to users</li>
                </ul>
            </div>
        );
    }
}
// class Work3 extends Component{
//     render(){
//         return(
//             <div className='tl ph4 work'>
//                 <h3 className='near-black'>Company Name 3</h3>
//                 <small className='moon-gray'> Year and Month</small>
//                 <ul className="tl">
//                     <li className='pa2'>I worked on this and this with this people</li>
//                     <li className='pa2'>I improved this and this</li>
//                     <li className='pa2'>I fixed this and this and manages to use this work around</li>
//                 </ul>
//             </div>
//         );
//     }
// }

export default Work1;
export {Work2};

