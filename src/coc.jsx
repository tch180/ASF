import React, { Component } from 'react';
import pic from '../src/assets/images/coc.png';
import pic2 from '../src/assets/images/coc1.png';
import pic3 from './assets/images/destiny_2_warmind.0.jpg';

export default class coc extends Component {
  render() {
    return (
      <div>   
             <div className="card">
                    <img src={pic} className="card-img-top" alt=".." />
                    {/* <div className="card-body">
                         <h5 className="card-title">Code Of conduct </h5>
                    </div> */}
                </div> 

                  <div className="Parallax-scroll" style={{backgroundImage: `url(${pic3})`, backgroundSize: "cover", backgroundAttachment:"fixed", }}>
                  <img src={pic2} style={{display: 'block', marginLeft:'auto', marginRight:'auto', }}className="card-img-top1" alt=".."/>
                  
                  </div>
                 
                


      </div>
    );
  }
}
