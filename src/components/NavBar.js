import React, { Component } from "react";
import { Navbar, NavItem, Row, Chip, Col } from "react-materialize";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="teal">
          <div className="brand-logo"> </div>
        </Navbar>
        <div className="title">
          <img
            className="reactLogo"
            src="http://adsvento.in/images/react/react.png"
          />
          <div>
            <h4 className="titleText">React Interview Set </h4>
            <p id="titleSubText"> Hover Over Flashcard to Reveal Answer</p>
            <Row>
              <Col s={12}>
                <Chip>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
                    alt="Contact Person"
                  />
                  React
                </Chip>
                <Chip>
                  <img
                    src="https://mycareersdb.com/media/uploads/8f5d17e5b25c47ac00fb262c25fb2446.png"
                    alt="Contact Person"
                  />
                  Interview
                </Chip>
                <Chip>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-512.png"
                    alt="Contact Person"
                  />
                  Firebase
                </Chip>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
