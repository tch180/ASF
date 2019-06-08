import React, { Component } from 'react';
import ASF from '../assets/images/Allied Shinobi Forces.png';
import allied from '../assets/images/Allied Shinobi Forces.png';
import shadow from '../assets/images/destiny2.png';
import shadow1 from '../assets/images/destiny3.jpg';




class Homepage extends Component {

    render() {
        return (
            <div>
                <div style={{backgroundColor:"black" }}> 
                    <div className="Alliance-Name" style={{backgroundColor:"white",fontSize:"5vw", fontWeight:"bold", margin: "0 auto",  textAlign:"Center", position:"absolute", mixBlendMode:"screen", top:"25%",  }}>Allied Shinobi Forces</div>      
                    <img className="header  mx-5" src={shadow}  style={{width:'95%', backgroundColor:'black'}}alt=""/>
                </div>

                <div className="parallax" style={{backgroundImage: `url(${shadow1})`, backgroundSize: "cover", backgroundAttachment:"fixed",height:"600px" }}>
                <h1 style={{color:"white", textAlign:"Center",}}>"No matter how hard the mission, we will probably still die."</h1>
                </div>
                    
            </div>

             
             

             

        );
    }
}

export default Homepage;