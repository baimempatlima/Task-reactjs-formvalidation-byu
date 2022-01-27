import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Carousel } from "react-bootstrap";

export default class Tampilan extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg " alt="Travel 1" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png" alt="Travel 2" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg " alt="Travel 3" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
