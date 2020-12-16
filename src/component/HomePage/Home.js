import React from "react";
import NavBar from './NavBar'
import CarouselPages from './Carousel'
import CardExample from './CardView'
import FooterPage from './footerCarsoul'

const Home = () => {

  return (

        <div className="container-fluid">

          <div className="col-12">
            <NavBar />
            <br />
          </div>
          <div className="col-12">

            <CarouselPages />

          </div>
          <br />
          <div className="row">

            <CardExample className='row-cols-3' />

          </div>



          <div className='container-fluid'>

            <FooterPage />
          </div>
        </div>

  );

}

export default Home;