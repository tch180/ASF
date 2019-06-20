import React, { Component } from 'react';





class streams extends Component {

    render() {

    

        return (
          <div>



            <div className="jumbotron  jumbotron-fluid embed-responsive embed-responsive-21by9 mb-2 mt-5">
              
                  <iframe align='center' width="800" height="400" src="https://www.youtube.com/embed/xjVgKG465F8" frameBorder="1" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen>
                  </iframe>
              
            </div>




            <div className="card mt-5" style={{ width: "18rem" }}>
              {" "}
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
              </div>
              <div className="card-body">
                {/* <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
              </div>
            </div>


          </div>
        );
    }
}

export default streams;