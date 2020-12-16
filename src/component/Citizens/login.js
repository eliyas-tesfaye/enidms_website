import React from "react";
import '../Citizens/citizen.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn
} from "mdbreact";

const FormPage = () => {
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                                    <h3 className="my-3">
                                        <MDBIcon icon="lock" /> Login:
                </h3>
                                </MDBCardHeader>
                                <br />
                                <label
                                    htmlFor="defaultFormEmailEx"
                                    className="grey-text font-weight-light"
                                >
                                    Your email
              </label>
                                <input
                                    type="email"
                                    id="defaultFormEmailEx"
                                    className="form-control"
                                />

                                <label
                                    htmlFor="defaultFormPasswordEx"
                                    className="grey-text font-weight-light"
                                >
                                    Your password
              </label>
                                <input
                                    type="password"
                                    id="defaultFormPasswordEx"
                                    className="form-control"
                                />

                                <div className="text-center mt-4">
                                    <MDBBtn color="deep-orange" className="mb-3" type="submit">
                                        Login
                </MDBBtn>
                                </div>

                                <MDBModalFooter>

                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default FormPage;