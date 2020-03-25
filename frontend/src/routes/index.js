import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import NewIncident from '~/pages/NewIncident';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/incidents/new" component={NewIncident} isPrivate />
    </Switch>
  );
};

export default Routes;
