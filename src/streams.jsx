
import React, { Component } from 'react';
import ice from '../src/assets/images/iceman.jpeg';
import blackiechane from '../src/assets/images/blackiechan.png';
import patty from '../src/assets/images/pattymac.png';
import step from '../src/assets/images/step1.png';
import smack from '../src/assets/images/smackaho.jpg';

import './streams.scss'


class streams extends Component {
  
 

    render() {

      
    

        return (
          <div>



            <div className="jumbotron  jumbotron-fluid embed-responsive embed-responsive-21by9 mb-2 mt-5">
              
                  <iframe align='center' width="800" height="400" src="https://www.youtube.com/embed/xjVgKG465F8" frameBorder="1" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen>
                  </iframe>
              
            </div>


            <div className="streamer-profiles container-fluid row" style={{display:"flex", justifyContent:"space-around"}}>

            <div className="card mt-5 bg-dark" style={{ width: "18rem" }}>
              <img src={blackiechane} className="card-img-top" alt="streamer pic will go here " />
              <div className="card-body">
                <h5 className="card-title">BlackieChan009</h5>
              </div>
              <div className="card-body" style={{color:"white"}}>
                <a href="https://www.twitch.tv/blackchina009" target="_blank" className="card-link btn btn-success">Stream</a>
              </div>
            </div>

            <div className="card mt-5 bg-dark" style={{ width: "18rem" }}>
              <img src={step} className="card-img-top" alt="streamer pic will go here " />
              <div className="card-body">
                <h5 className="card-title">StepJr</h5>
              </div>
              <div className="card-body" style={{color:"white"}}>
                 <a href="https://www.twitch.tv/stepjr0" target="_blank" className="card-link btn btn-success">Stream</a>
              </div>
            </div>


            <div className="card mt-5 bg-dark" style={{ width: "18rem" }}>
              <img src={ice} className="card-img-top" alt="streamer pic will go here " />
              <div className="card-body">
                <h5 className="card-title">Iceman8706</h5>
              </div>
              <div className="card-body" style={{color:"white"}}>
                <a href="https://www.twitch.tv/iceman8706" target="_blank" className="card-link btn btn-success">Stream</a>
              </div>
            </div>
            </div>

            <div className="jumbotron  jumbotron-fluid embed-responsive embed-responsive-21by9 mb-2 mt-5">
            <iframe align='center' width="800" height="400" src="https://www.youtube.com/embed/H-Ot4_rIBPA" frameBorder="1" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen>
                  </iframe>
            </div>
            
                        
                      <div className="streamer-profiles container-fluid row" style={{display:"flex", justifyContent:"space-around"}}>

          <div className="card mt-5 bg-dark" style={{ width: "18rem" }}>
            <img src={smack} className="card-img-top" alt="streamer pic will go here " />
            <div className="card-body">
              <h5 className="card-title">SgtSmackaho</h5>
            </div>
            <div className="card-body" style={{color:"white"}}>
              <a href="https://www.twitch.tv/sgt__smackaho/" target="_blank" className="card-link btn btn-success">Stream</a>
            </div>
          </div>

          <div className="card mt-5 bg-dark" style={{ width: "18rem" }}>
            <img src={patty} className="card-img-top" alt="streamer pic will go here " />
            <div className="card-body" style={{color:"white"}}>
              <h5 className="card-title">PattyMacAttack</h5>
            </div>
            <div className="card-body">
              <a href="https://www.twitch.tv/pattymacattack/" target="_blank" className="card-link btn btn-success">Stream</a>
            </div>
          </div>


          
          </div>














          </div>
        );
    }
}

export default streams;