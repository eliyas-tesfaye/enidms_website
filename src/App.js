import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './component/HomePage/Home'
import AboutUs from './component/AboutUs'
import Contact from './component/ContactUs'
import CitizenHomePage from './component/Citizens/CitizenHomePage'
import FormPage from './component/Citizens/login'

const App = () => {

  return (

    <>
      <Router>


        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={AboutUs} />
        <Route path="/Contact" exact component={Contact} />

        <Route path="/Citizen" exact component={CitizenHomePage} />

        <Route path="/login" exact component={FormPage} />


      </Router>
    </>

  );

}

export default App;