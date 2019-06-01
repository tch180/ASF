import React, { Component } from 'react';
import ASF from '../assets/images/Allied Shinobi Forces.png';




class Homepage extends Component {

    render() {
        return (
            <div>
                <div className="card">       
                 <img className="header  mx-5" src={ASF}  style={{width:'95%'}}alt=""/>

                <div className="container">
               
               </div>
              </div>
            </div>
        );
    }
}

export default Homepage;