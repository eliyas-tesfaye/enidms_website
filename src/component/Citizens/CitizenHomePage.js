import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../HomePage/NavBar'
import { MDBRow, MDBCol } from "mdbreact";
import TabsJustified from './Tabs'
import './citizen.css'

class CitizenHomePage extends Component {
  state = {

  };


  render() {
    return (
      <Router>
        <NavBar />

        <br />

        <MDBContainer className="row">
          <div className="col-6" >
            <MDBRow>
              <MDBCol>
                <img src="/images/user.png" alt="thumbnail" className="circle img-thumbnail" id="userS" />

                <br /> <br />

                <div className="row container">

                  <label className="textSpecing black-text" >
                    Full name
                  </label>

                  <label className="textSpecing sample black-text" >
                    Hagos G/Egziabher H/michael
                  </label>
                </div>
                <div className="row container">

                  <label className="textSpecing black-text" >
                    wereda</label>

                  <label className="textSpecing sample black-text" >
                    02</label>
                </div>                
                <div className="row container">

                  <label className="textSpecing black-text" >
                    wereda</label>

                  <label className="textSpecing sample black-text" >
                    Marcos jarso kebele gebere</label>
                </div>
                <div className="row container">

                  <label className="textSpecing black-text" >
                    Emergency
                  </label>

                  <label className="textSpecing sample black-text bold" >
                    Hagos G/Egziabher H/michael
                  </label>
                </div>
                <div className="row container">

                  <label className="textSpecing black-text" >
                    wereda</label>

                  <label className="textSpecing sample black-text" >
                    02</label>
                </div>                
                <div className="row container">

                  <label className="textSpecing black-text" >
                    wereda</label>

                  <label className="textSpecing sample black-text" >
                    Marcos jarso kebele gebere</label>
                </div>
                
              </MDBCol>
            </MDBRow>
          </div>
          <div className="col-6">
            
            <TabsJustified />
          </div>
        </MDBContainer>
      </Router>
    );
  }
}

export default CitizenHomePage;