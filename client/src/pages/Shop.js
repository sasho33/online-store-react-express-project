import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';

export default function Shop() {
  return (
    <Container className="pt-2">
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
