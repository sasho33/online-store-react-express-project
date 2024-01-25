import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { login, registration } from '../http/userAPI';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginButtonClick = async () => {
    if (isLogin) {
      const response = await login();
      console.log(response);
    } else {
      const response = await registration();
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Enter your email..."
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Enter your password..."
            type="password"
          />
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
            <Button
              onClick={onLoginButtonClick}
              className="mt-3 align-self-end"
              variant={'outline-success'}
            >
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
