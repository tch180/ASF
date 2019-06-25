import React, { Component } from 'react';
import ASF from '../assets/images/Allied Shinobi Forces.png';
import allied from '../assets/images/Allied Shinobi Forces.png';
import shadow from '../assets/images/destiny2.png';
import shadow1 from '../assets/images/destiny3.jpg';

import './homepage.scss';




class Homepage extends Component {
    

   




    render() {
        return (
            <div>

                <div style={{backgroundColor:"black" }}> 
                    <div className="Alliance-Name" style={{backgroundColor:"white",fontSize:"5vw", fontWeight:"bold", margin: "0 auto",  textAlign:"Center", position:"absolute", mixBlendMode:"screen", top:"15%", left:"25%"  }}>Allied Shinobi Forces</div>      
                    <img className="header  mx-5" src={shadow}  style={{width:'95%', backgroundColor:'black'}}alt=""/>
                </div>

                <div className="parallax" style={{backgroundImage: `url(${shadow1})`, backgroundSize: "cover", backgroundAttachment:"fixed",height:"600px" }}>
                <h1 style={{color:"white", textAlign:"Center",}}>"No matter how hard the mission, we will probably still die."</h1>
                </div>

                <div className="clan-quote" style={{ backgroundColor:"black",height:"600px" }}> 

                    <h1 className="clan-q" >
                        When the  Red War began <span>they came to us.</span> <br/> When the Dreaming City fell under a curse<br/> <span>we were granted access to cleanse their city.</span> <br/> 
                        They put all of their faith and trust into us, <br/>but where would they be without us? Imagine not having your light anymore.<br></br> <span>A war is coming. </span> 
                        This time <span> they will call upon us again. </span> The question, my fellow guardian, <span>will you answer?</span> 
                    </h1>

                </div>
                    
            </div>

             
             

             

        );
    }
}

export default Homepage;