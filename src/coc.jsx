import React, { Component } from 'react';
import pic from '../src/assets/images/coc.png';
import pic2 from '../src/assets/images/coc1.png';

export default class coc extends Component {
  render() {
    return (
      <div>   
             <div className="card">
                    <img src={pic} className="card-img-top" alt="..."/>
                    <div className="card-body">
                         <h5 className="card-title">Code Of conduct </h5>
                             <a href="#" className="btn btn-primary">Enter</a>
                    </div>
                </div> 

                    <img src={pic2} style={{display: 'block', marginLeft:'auto', marginRight:'auto'}}className="card-img-top1" alt="..."/>
                


      </div>
    );
  }
}
