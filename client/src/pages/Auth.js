import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { REGISTRATION_ROUTE } from '../utils/const';

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control className="mt-3" placeholder="Enter your password..." />
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Not registered yet? Click <NavLink to={REGISTRATION_ROUTE}>here</NavLink>!
            </div>
            <Button className="mt-3 align-self-end" variant={'outline-success'}>
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
