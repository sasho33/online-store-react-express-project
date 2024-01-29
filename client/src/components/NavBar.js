import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.7rem',
            fontStyle: 'italic',
            transform: 'rotate(-4deg)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            letterSpacing: '2px',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',
          }}
          to={SHOP_ROUTE}
        >
          BuyDevice.com
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button onClick={() => history.push(ADMIN_ROUTE)} variant={'outline-light'}>
              Admin Panel
            </Button>
            <Button
              onClick={() => {
                user.setUser({});
                user.setIsAuth(false);
                history.push(LOGIN_ROUTE);
              }}
              variant={'outline-light'}
              className="ml-2"
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              className="ml-2"
              onClick={() => {
                history.push(LOGIN_ROUTE);
              }}
            >
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
