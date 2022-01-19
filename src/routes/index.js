import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from 'views/dashboard';
import Device from 'views/device';

function Routes() {
  return (
    <Switch>
      <Route exact path="/device" component={Device} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default Routes;
