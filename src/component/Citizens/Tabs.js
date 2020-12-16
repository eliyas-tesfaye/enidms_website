import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
// import ContactUs from'../../component/ContactUs';

class TabsDefault extends Component {
    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    render() {
        return (
            <MDBContainer>
                <MDBNav className=" nav-justified" color='indigo' >
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                            Personal information
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                            Education Record
                         </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                            Health Record
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
                            Criminal Record
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
                            Certificate
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>

                <MDBTabContent activeItem={this.state.activeItem} >
                    <MDBTabPane tabId="1" role="tabpanel">

                        {/* <ContactUs /> */}
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                        <p className="mt-2">
                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                            voluptate odit minima. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nihil odit magnam minima,
                            soluta doloribus reiciendis molestiae placeat unde eos
                            molestias.
            </p>
                        <p>
                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                            voluptate odit minima. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nihil odit magnam minima,
                            soluta doloribus reiciendis molestiae placeat unde eos
                            molestias.
            </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3" role="tabpanel">
                        <p className="mt-2">
                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                            voluptate odit minima. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nihil odit magnam minima,
                            soluta doloribus reiciendis molestiae placeat unde eos
                            molestias.
            </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="4" role="tabpanel">
                        <p className="mt-2">
                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                            voluptate odit minima. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nihil odit magnam minima,
                            soluta doloribus reiciendis molestiae placeat unde eos
                            molestias.
            </p>
                    </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
        );
    }
}
export default TabsDefault