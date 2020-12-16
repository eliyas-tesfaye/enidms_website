import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";

const CarouselPages = () => {
    return (
        <>

            <div className='container-fluid'>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner >
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">ENIDMS</h3>
                                <p>Ethiopian National Identification and Data Management System</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">ENIDMS</h3>
                                <p>Ethiopian National Identification and Data Management System</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">ENIDMS</h3>
                                <p>Ethiopian National Identification and Data Management System</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">ENIDMS</h3>
                                <p>Ethiopian National Identification and Data Management System</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>

        </>
    );
}

export default CarouselPages;