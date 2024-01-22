import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/const';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>Admin Panel</Button>
            <Button
              variant={'outline-light'}
              className="ml-2"
              onClick={() => user.setIsAuth(false)}
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} className="ml-2" onClick={() => user.setIsAuth(true)}>
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
