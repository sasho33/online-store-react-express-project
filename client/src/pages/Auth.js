import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control className="mt-3" placeholder="Enter your password..." />
          <div className="d-flex justify-content-between align-items-center mt-3">
            {isLogin ? (
              <div>
                Not registered yet? Click <NavLink to={REGISTRATION_ROUTE}>here</NavLink>!
              </div>
            ) : (
              <div>
                Already registered? Click <NavLink to={LOGIN_ROUTE}>here</NavLink>!
              </div>
            )}
            <Button className="mt-3 align-self-end" variant={'outline-success'}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
