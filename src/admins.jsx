import React, { Component } from 'react';
import admins1 from '../src/assets/images/admins1.png'

class admins extends Component {
    render() {
        return (
            <div className="header pt-5"  >
                <img src={admins1}  style={{display: 'block', marginLeft:'auto', marginRight:'auto', width:'95%', paddingTop:"25px"}}alt=""/>
            </div>
        );
    }
}

export default admins;