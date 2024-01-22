import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import { Context } from '../index';

const AppRouter = () => {
  //   const isAuth = false;
  const { user } = useContext(Context);
  //   console.log(user);

  //   console.log(user);
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE}></Redirect>
    </Switch>
  );
};

export default AppRouter;
