import React, { Component } from 'react';
import admins1 from '../src/assets/images/admins.png'

class admins extends Component {
    render() {
        return (
            <div className="header mt-5"  >
                <img src={admins1}  style={{display: 'block', marginLeft:'auto', marginRight:'auto', width:'95%'}}alt=""/>
            </div>
        );
    }
}

export default admins;